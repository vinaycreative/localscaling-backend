import { Router } from "express";
import {
  getAdsBudgetController,
  getBrandingController,
  getBusinessInfoController,
  getWebsiteSetupController,
  saveAdsBudgetController,
  saveBrandingController,
  saveBusinessInfoController,
  saveWebsiteSetupController,
} from "./onboarding.controller";

const router = Router();

router.get("/business-info", getBusinessInfoController);
router.post("/business-info", saveBusinessInfoController);

router.post("/branding", saveBrandingController);
router.get("/branding", getBrandingController);

router.get("/website-setup", getWebsiteSetupController);
router.post("/website-setup", saveWebsiteSetupController);

router.get("/ads-budget", getAdsBudgetController);
router.post("/ads-budget", saveAdsBudgetController);

export default router;
