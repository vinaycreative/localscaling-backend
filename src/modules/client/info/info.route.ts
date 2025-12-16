import { Router } from "express"
import businessInfoRoutes from "./business-info/business-info.route"
import brandingInfoRoutes from "./branding-info/branding-info.route"

const infoRoutes = Router()

infoRoutes.use("/business-info", businessInfoRoutes)
infoRoutes.use("/branding-info", brandingInfoRoutes)

export default infoRoutes
