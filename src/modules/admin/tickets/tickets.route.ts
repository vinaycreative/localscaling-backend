import { Router } from "express"
import {
  getTicketsAssigneesController,
  getTicketsController,
  updateTicketsController,
} from "./tickets.controller"
import { authMiddleware } from "@/middleware/authMiddleware"

const router = Router()

router.use(authMiddleware)
router.get("/", getTicketsController)
router.get("/assignees", getTicketsAssigneesController)

router.put("/:id", updateTicketsController)

export default router
