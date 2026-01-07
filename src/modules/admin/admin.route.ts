import { Router } from "express"
import clientRoutes from "./client/client.route"
import authRoutes from "./auth/auth.route"
import projectsRoutes from "./projects/projects.route"

const router = Router()
router.use("/auth", authRoutes)
router.use("/clients", clientRoutes)
router.use("/projects", projectsRoutes)

export default router
