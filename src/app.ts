import express from "express"
import cors from "cors"
import helmet from "helmet"
import { logger } from "@/config/logger"
import cookieParser from "cookie-parser"
import compression from "compression"
import dealerV1Routes from "@/routes/client"
import { errorHandler } from "@/middleware/errorHandler"
import moment from "moment-timezone"
const frontendUrl = process.env.FRONTEND_URL!
const frontendDevUrl = process.env.FRONTEND_DEV_URL!

const app = express()
app.use(cookieParser())
// Middlewares
// Global Middleware
const allowedOrigins = [frontendUrl, frontendDevUrl, "http://localhost:3000"]
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
  })
)
app.use(helmet())
app.use(compression())
app.use((req, res, next) => {
  const start = Date.now()
  res.on("finish", () => {
    const istTime = moment().tz("Asia/Kolkata").format("DD/MM/YYYY hh:mm:ss A")
    logger.info(
      `${req.method} ${req.originalUrl} | ${res.statusCode} | ${
        Date.now() - start
      }ms | ${istTime} IST`
    )
  })
  next()
})

// Routes
app.use("/api/v1/client", dealerV1Routes)

// Global Error Handler
app.use(errorHandler)

export default app
