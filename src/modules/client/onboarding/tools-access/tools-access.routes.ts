import { Router } from "express"
import { getToolsAccessController, saveToolsAccessController } from "./tools-access.controller"

const router = Router()

router.get("/", getToolsAccessController)
router.post("/create", saveToolsAccessController)
export default router
