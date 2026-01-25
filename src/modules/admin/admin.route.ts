import { Router } from "express"
import clientRoutes from "./client/client.route"
import authRoutes from "./auth/auth.route"
import projectsRoutes from "./projects/projects.route"
import ticketsRoutes from "./tickets/tickets.route"

const router = Router()
router.use("/auth", authRoutes)
router.use("/clients", clientRoutes)
router.use("/projects", projectsRoutes)
router.use("/tickets", ticketsRoutes)

export default router
