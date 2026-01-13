import axios from "axios"
import { WebflowSite } from "./webflow.types"
import { db } from "@/config/db"
import { exchangeWebflowCodeForToken, generateWebflowAuthUrl } from "./webflow.oauth"
import { logger } from "@/config/logger"

const WEBFLOW_API_BASE = "https://api.webflow.com/v2"

export async function fetchWebflowSites(accessToken: string): Promise<WebflowSite[]> {
  const res = await axios.get(`${WEBFLOW_API_BASE}/sites`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return res.data.sites.map((site: any) => ({
    id: site.id,
    name: site.name,
    shortName: site.shortName,
  }))
}

export async function startWebflowOAuth(clientId: string) {
  const { data: integration, error } = await db
    .from("client_integrations")
    .upsert(
      {
        client_id: clientId,
        provider: "webflow",
        tool: "webflow",
        status: "pending",
        external_account_id: "",
        external_account_name: "",
        connected_at: new Date().toISOString(),
      },
      { onConflict: "client_id,provider,tool" }
    )
    .select()
    .single()

  if (error || !integration) {
    throw new Error("Failed to initialize Webflow integration" + error?.message)
  }

  const authUrl = generateWebflowAuthUrl(integration.id)
  return { authUrl }
}

export async function handleWebflowOAuthCallback(params: { integrationId: string; code: string }) {
  const accessToken = await exchangeWebflowCodeForToken(params.code)
  logger.debug({ integrationId: params.integrationId }, "Webflow OAuth token acquired")

  const { error: credentialError } = await db.from("oauth_credentials").upsert(
    {
      client_integration_id: params.integrationId,
      provider: "webflow",
      access_token: accessToken,
      refresh_token: null,
      // Webflow SDK returns only an access token string; expiry is not provided here.
      expires_at: null,
    },
    { onConflict: "client_integration_id" }
  )

  if (credentialError) {
    throw new Error(`Failed to store Webflow OAuth credentials: ${credentialError.message}`)
  }

  // Mark integration as connected as soon as OAuth succeeds.
  // `verifyWebflowIntegration` can later attach the selected site/workspace identifiers.
  const { error: integrationError } = await db
    .from("client_integrations")
    .update({
      status: "connected",
      last_verified_at: new Date().toISOString(),
    })
    .eq("id", params.integrationId)

  if (integrationError) {
    throw new Error(`Failed to update Webflow integration status: ${integrationError.message}`)
  }

  return { integrationId: params.integrationId }
}

export async function getWebflowSites(integrationId: string) {
  const { data, error } = await db
    .from("oauth_credentials")
    .select("access_token")
    .eq("client_integration_id", integrationId)
    .single()

  if (error || !data?.access_token) {
    throw new Error("Webflow credentials not found")
  }

  return fetchWebflowSites(data.access_token)
}

export async function verifyWebflowIntegration(params: {
  integrationId: string
  siteId: string
  siteName: string
}) {
  const { error } = await db
    .from("client_integrations")
    .update({
      external_account_id: params.siteId,
      external_account_name: params.siteName,
      status: "connected",
      last_verified_at: new Date().toISOString(),
    })
    .eq("id", params.integrationId)

  if (error) {
    throw new Error("Failed to verify Webflow integration")
  }

  return { success: true }
}
