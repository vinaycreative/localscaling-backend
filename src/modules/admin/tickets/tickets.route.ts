import { Router } from "express"
import { getTicketsAssigneesController, getTicketsController } from "./tickets.controller"
import { createTicketsController } from "./tickets.controller"
import { authMiddleware } from "@/middleware/authMiddleware"

const router = Router()

router.use(authMiddleware)
router.get("/", getTicketsController)
router.get("/assignees", getTicketsAssigneesController)
router.post("/", createTicketsController)

export default router
