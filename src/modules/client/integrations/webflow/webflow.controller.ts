import { Request, Response } from "express"
import {
  getWebflowSites,
  handleWebflowOAuthCallback,
  startWebflowOAuth,
  verifyWebflowIntegration,
} from "./webflow.service"
import { sendSuccess } from "@/utils/response"

export async function connectWebflow(req: Request, res: Response) {
  const clientId = req.user?.id!
  const { authUrl } = await startWebflowOAuth(clientId)
  return res.redirect(authUrl)
}

export async function webflowOAuthCallback(req: Request, res: Response) {
  const { code, state } = req.query

  if (!code || !state) {
    return res.redirect(
      `${process.env.FRONTEND_DEV_URL}/tasks/tools-access?error=Invalid OAuth callback`
    )
  }

  const result = await handleWebflowOAuthCallback({
    integrationId: state as string,
    code: code as string,
  })

  return res.redirect(
    `${process.env.FRONTEND_DEV_URL}/tasks/tools-access?integrationId=${result.integrationId}`
  )
}

export async function listWebflowSitesController(req: Request, res: Response) {
  const { integrationId } = req.params
  const sites = await getWebflowSites(integrationId)
  return sendSuccess(res, "Webflow sites fetched", sites)
}

export async function verifyWebflowController(req: Request, res: Response) {
  const { integrationId } = req.params
  const { site_id, site_name } = req.body

  await verifyWebflowIntegration({
    integrationId,
    siteId: site_id,
    siteName: site_name,
  })

  return sendSuccess(res, "Webflow connected successfully", null)
}
