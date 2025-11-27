import { authMiddleware } from "@/middleware/authMiddleware";
import { Router } from "express";
import { saveBusinessInfoController } from "./onboarding.controller";

const router = Router();

router.post("/business-info", authMiddleware, saveBusinessInfoController);

export default router;
