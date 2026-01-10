import app from "@/app"
import { env } from "@/config/env"
import "module-alias/register"

const PORT = parseInt(env.PORT)
app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`)
})
