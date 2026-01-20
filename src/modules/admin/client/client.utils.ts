import { env } from "@/config/env"
import { transporter } from "@/config/nodemailer"
import { AppError } from "@/utils/appError"
import { GetClientsFilters } from "./client.type"
import nodemailer from "nodemailer"

// send email to client welcome with login credentials
export const sendWelcomeEmail = async (email: string, password: string) => {
  try {
    const mailOptions = {
      from: env.EMAIL_USER,
      to: email,
      subject: "Welcome to Local Scaling - Your Account Credentials",
      text: `Your login credentials for Local Scaling are below:`,
      html: `
        <h1>Welcome to Local Scaling</h1>
        <p>Your login credentials</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
        <p>Please login to your account to get started</p>
        <a href="http://localhost:3000/login" style="background-color: #007bff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: 600;">Login to Your Account</a>
        <p>Thank you for choosing our platform</p>
        <p>Best regards,</p>
        <p>Local Scaling Team</p>
      `,
    }
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    throw new AppError(`Failed to send welcome email: ${error}`, 500)
  }
}

export const welcomeEmailWithPaymentLink = async (email: string, paymentUrl: string) => {
  try {
    const mailOptions = {
      from: env.EMAIL_USER,
      to: email,
      subject: "Action Required: Complete Your Payment - Local Scaling",
      text: `To get started with Local Scaling, please complete your payment using the link below:`,
      html: `
        <h1>Complete Your Registration</h1>
        <p>Your payment link</p>
        <a href="${paymentUrl}" target="_blank" rel="noreferrer" style="background-color: #28a745; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: 600;">Click here to pay</a>
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

export const getClientFiltersUtil = (query: Record<string, unknown>): GetClientsFilters => {
  const filters: GetClientsFilters = {
    page: Number(query.page || 1) as number,
    perPage: Number(query.perPage || 10) as number | undefined,
    company_name: query.company_name as string | undefined,
    name: query.name as string | undefined,
    email: query.email as string | undefined,
    vat_id: query.vat_id as string | undefined,
    address: query.address as string | undefined,
    postal_code: query.postal_code as string | undefined,
    city: query.city as string | undefined,
    state: query.state as string | undefined,
    country: query.country as string | undefined,
    monthly_payment_excluding_taxes: query.monthly_payment_excluding_taxes as string | undefined,
    payment_status: query.payment_status as string | undefined,
    payment_link: query.payment_link as string | undefined,
    user_id: query.user_id as string | undefined,
    created_at: query.created_at as string | undefined,
    updated_at: query.updated_at as string | undefined,
    status: query.status as string | undefined,
  }
  return filters
}
