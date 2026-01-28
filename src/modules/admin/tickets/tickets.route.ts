import { Router } from "express"
import {
  bulkUpdateTicketsController,
  getTicketsAssigneesController,
  getTicketsController,
  updateTicketsController
} from "./tickets.controller"
import { authMiddleware } from "@/middleware/authMiddleware"

const router = Router()

router.use(authMiddleware)
router.get("/", getTicketsController)
router.get("/assignees", getTicketsAssigneesController)

router.put("/bulk-update", bulkUpdateTicketsController)
router.put("/:id", updateTicketsController)

export default router
