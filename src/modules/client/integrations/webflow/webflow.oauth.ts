import { WebflowClient } from "webflow-api"
import { env } from "@/config/env"
import { logger } from "@/config/logger"

function cleanEnvValue(value: string): string {
  const trimmed = value.trim()
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim()
  }
  return trimmed
}

export function generateWebflowAuthUrl(state: string) {
  // Per official docs + SDK: scope is required on the authorize URL.
  // Default to "sites:read" (minimal for listing sites) unless overridden via WEBFLOW_SCOPES.
  const scope = (env.WEBFLOW_SCOPES ?? "sites:read")
    .split(" ")
    .map((s) => s.trim())
    .filter(Boolean)

  return WebflowClient.authorizeURL({
    clientId: cleanEnvValue(env.WEBFLOW_CLIENT_ID),
    redirectUri: cleanEnvValue(env.WEBFLOW_REDIRECT_URI),
    state,
    scope: scope.length === 1 ? (scope[0] as any) : (scope as any),
  })
}

export async function exchangeWebflowCodeForToken(code: string) {
  const clientId = cleanEnvValue(env.WEBFLOW_CLIENT_ID)
  const redirectUri = cleanEnvValue(env.WEBFLOW_REDIRECT_URI)
  const clientSecretPrimary = env.WEBFLOW_CLIENT_SECRET
    ? cleanEnvValue(env.WEBFLOW_CLIENT_SECRET)
    : null
  const clientSecretLegacy = env.WEBFLOW_SECRET ? cleanEnvValue(env.WEBFLOW_SECRET) : null

  if (clientSecretPrimary && clientSecretLegacy && clientSecretPrimary !== clientSecretLegacy) {
    throw new Error(
      "Both WEBFLOW_CLIENT_SECRET and WEBFLOW_SECRET are set but differ. Remove one and keep only the correct Webflow OAuth client secret."
    )
  }

  const clientSecret = clientSecretPrimary ?? clientSecretLegacy
  if (!clientSecret) {
    throw new Error("Missing WEBFLOW_CLIENT_SECRET (or legacy WEBFLOW_SECRET)")
  }

  try {
    const accessToken = await WebflowClient.getAccessToken({
      clientId,
      clientSecret,
      code,
      redirectUri,
    })

    return accessToken
  } catch (e: any) {
    // Masked diagnostics to help debug "invalid_client" without leaking secrets.
    logger.error(
      {
        statusCode: e?.statusCode,
        body: e?.body,
        clientIdLen: clientId.length,
        clientIdTail: clientId.slice(-6),
        redirectUri,
        hasClientSecret: Boolean(clientSecret),
        clientSecretLen: clientSecret.length,
      },
      "Webflow getAccessToken failed"
    )
    throw e
  }
}
