import { Router } from "express"
import { getProjectsController } from "./projects.controller"
import { adminOnlyMiddleware, authMiddleware } from "@/middleware/authMiddleware"

const router = Router()

router.use(authMiddleware, adminOnlyMiddleware)
router.get("/", getProjectsController)

export default router
