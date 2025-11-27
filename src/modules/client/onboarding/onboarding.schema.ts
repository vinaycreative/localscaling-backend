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

const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;

export const brandingSchema = z.object({
  client_id: z.string().uuid("Invalid Client ID"),

  brand_color_primary: z
    .string()
    .regex(hexColorRegex, "Invalid Hex Color")
    .optional(),
  brand_color_secondary: z
    .string()
    .regex(hexColorRegex, "Invalid Hex Color")
    .optional(),

  font_link: z.string().optional(),
  company_logo_url: z.url("Invalid Logo URL").optional().or(z.literal("")),

  team_photos_url: z.array(z.url()).optional(),
  video_testimonials_urls: z.array(z.url()).optional(),
  ceo_intro_video_url: z
    .string()
    .url("Invalid Video URL")
    .optional()
    .or(z.literal("")),

  team_members: z
    .array(
      z.object({
        name: z.string(),
        position: z.string(),
        bio: z.string().optional(),
      })
    )
    .optional(),

  total_team_members: z.number().int().nonnegative().optional(),
});

export type BrandingInput = z.infer<typeof brandingSchema>;

export const websiteSchema = z.object({
  client_id: z.uuid("Invalid Client ID"),
  domain_provider: z
    .string()
    .min(1, "Domain provider is required")
    .optional()
    .or(z.literal("")),
  business_clients_worked: z.array(z.string()).optional(),
  legal_docs: z.array(z.string().url("Invalid Legal Doc URL")).optional(),
  legal_links: z.array(z.string().url("Invalid Legal Link URL")).optional(),
  seo_locations: z.array(z.string().min(1)).optional(),
});

export type WebsiteInput = z.infer<typeof websiteSchema>;
