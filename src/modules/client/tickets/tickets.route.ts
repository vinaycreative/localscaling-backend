import { Router } from "express"
import { getTicketsController } from "./tickets.controller"

const router = Router()

router.get("/", getTicketsController)

export default router
