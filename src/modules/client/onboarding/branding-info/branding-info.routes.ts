import { Router } from "express"
import { getBrandingController, saveBrandingController } from "./branding-info.controller"

const router = Router()

router.post("/", saveBrandingController)
router.get("/create", getBrandingController)

export default router
