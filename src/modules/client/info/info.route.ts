import { Router } from "express"
import businessInfoRoutes from "./business-info/business-infor.route"

const infoRoutes = Router()

infoRoutes.use("/business-info", businessInfoRoutes)

export default infoRoutes
