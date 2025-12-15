import { env } from "@/config/env"
import { transporter } from "@/config/nodemailer"
import { AppError } from "@/utils/appError"

// send email to client welcome with login credentials
export const sendWelcomeEmail = async (email: string, password: string) => {
  try {
    const mailOptions = {
      from: env.EMAIL_USER,
      to: email,
      subject: "Welcome to our Local Scaling platform",
      text: `Welcome to our Local Scaling platform. Your login credentials are below:`,
      html: `
        <h1>Welcome to our Local Scaling platform</h1>
        <p>Your login credentials</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
        <p>Please login to your account to get started</p>
        <a href="http://localhost:3000/login">Login</a>
        <p>Thank you for choosing our platform</p>
        <p>Best regards,</p>
        <p>Local Scaling Team</p>
      `,
    }
    await transporter.sendMail(mailOptions)
  } catch (error) {
    throw new AppError(`Failed to send welcome email: ${error}`, 500)
  }
}

export const welcomeEmailWithPaymentLink = async (email: string, id: string) => {
  try {
    const mailOptions = {
      from: env.EMAIL_USER,
      to: email,
      subject: "Welcome to our Local Scaling platform",
      text: `Welcome to our Local Scaling platform. Your payment link is below:`,
      html: `
        <h1>Welcome to our Local Scaling platform</h1>
        <p>Your payment link</p>
        <a href="http://localhost:3000/payment?success=${id}">Click here to pay</a>
        <p>Please pay to activate your account</p>
        <p>Thank you for choosing our platform</p>
        <p>Best regards,</p>
        <p>Local Scaling Team</p>
      `,
    }
    await transporter.sendMail(mailOptions)
  } catch (error) {
    throw new AppError(`Failed to send welcome email with payment link: ${error}`, 500)
  }
}
