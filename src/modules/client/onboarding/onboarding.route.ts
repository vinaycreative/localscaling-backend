import { Router } from "express";
import {
  getBrandingController,
  getBusinessInfoController,
  getWebsiteSetupController,
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

export default router;
