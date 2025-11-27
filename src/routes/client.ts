import authRoutes from "@/modules/client/auth/auth.routes";
import onboardingRoutes from "@/modules/client/onboarding/onboarding.route";
import { Router } from "express";
const router = Router();

router.use("/auth", authRoutes);
router.use("/onboarding", onboardingRoutes);
export default router;
