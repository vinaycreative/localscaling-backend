import { Router } from "express"
import {
  getLoggedInDealerController,
  loginDealerController,
  logoutDealerController,
} from "./auth.controller"
import { authenticateDealer } from "@/middleware/authMiddleware"

const router = Router()

router.post("/login", loginDealerController)
router.get("/me", authenticateDealer, getLoggedInDealerController)
router.post("/logout", logoutDealerController)
export default router
