import { authMiddleware } from "@/middleware/authMiddleware";
import { Router } from "express";
import {
  devLoginController,
  exchangeSessionController,
  loginUserController,
  logoutUserController,
  signUpUserController,
} from "./auth.controller";

const router = Router();

router.post("/login", loginUserController);
router.post("/signup", signUpUserController);
router.post("/exchange-session", exchangeSessionController);
router.post("/dev-login", devLoginController);
// router.get("/me", authMiddleware, getLoggedInUserController);
router.post("/logout", logoutUserController);
export default router;
