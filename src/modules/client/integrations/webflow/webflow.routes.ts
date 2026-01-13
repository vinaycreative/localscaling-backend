import { Router } from "express"
import {
  connectWebflow,
  listWebflowSitesController,
  verifyWebflowController,
  webflowOAuthCallback,
} from "./webflow.controller"

const router = Router()

// Webflow OAuth
router.get("/connect", connectWebflow)
router.get("/callback", webflowOAuthCallback)
router.get("/:integrationId/sites", listWebflowSitesController)
router.post("/:integrationId/verify", verifyWebflowController)

export default router
