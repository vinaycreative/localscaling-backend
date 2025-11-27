import { z } from "zod";

export const businessInfoSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  company_start_year: z.number().int().min(1800).max(new Date().getFullYear()),
  street_address: z.string().min(1, "Address is required"),
  postal_code: z.string().min(1, "Postal code is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  vat_id: z.string().optional(),
  contact_name: z.string().min(1, "Contact name is required"),
  contact_email: z.string().email("Invalid contact email"),
  contact_number: z.string().min(1, "Contact number is required"),
  whatsapp_number: z.string().optional(),
  current_website: z.url().optional().or(z.literal("")),

  socials: z
    .object({
      facebook_link: z.url().optional().or(z.literal("")),
      instagram_link: z.url().optional().or(z.literal("")),
      linkedin_link: z.url().optional().or(z.literal("")),
      youtube_link: z.url().optional().or(z.literal("")),
      twitter_link: z.url().optional().or(z.literal("")),
      google_business_link: z.url().optional().or(z.literal("")),
    })
    .optional(),
});

export type BusinessInfoInput = z.infer<typeof businessInfoSchema>;
