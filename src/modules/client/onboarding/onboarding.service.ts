import { supabaseAdmin } from "@/config/db";
import {
  BrandingPayload,
  BusinessFormData,
  LocationsBudgetForm,
  WebsiteSetupPayload,
} from "./onboarding.schema";

function mapToDb(data: BusinessFormData, userId: string) {
  const clientData = {
    company_name: data.company,
    company_start_year: parseInt(data.startYear),
    street_address: data.streetAddress,
    postal_code: data.postalCode,
    city: data.city,
    state: data.state,
    country: data.country,
    vat_id: data.vatId,
    contact_name: data.contactName,
    contact_email: data.email,
    contact_number: data.contactNumber,
    whatsapp_number: data.whatsappNumber || null,
    current_website: data.website,
    user_id: userId,
  };

  const socialsData = {
    facebook_link: data.facebook || null,
    instagram_link: data.instagram || null,
    twitter_link: data.twitter || null,
    google_business_link: data.googleBusinessProfileLink || null,
  };

  return { clientData, socialsData };
}

function mapFromDb(client: any, socials: any): BusinessFormData {
  return {
    company: client.company_name || "",
    startYear: client.company_start_year?.toString() || "",
    streetAddress: client.street_address || "",
    postalCode: client.postal_code || "",
    city: client.city || "",
    state: client.state || "",
    country: client.country || "",
    vatId: client.vat_id || "",
    contactName: client.contact_name || "",
    email: client.contact_email || "",
    contactNumber: client.contact_number || "",
    whatsappNumber: client.whatsapp_number || "",
    website: client.current_website || "",
    facebook: socials?.facebook_link || "",
    instagram: socials?.instagram_link || "",
    twitter: socials?.twitter_link || "",
    googleBusinessProfileLink: socials?.google_business_link || "",
  };
}

function mapBrandingToDb(data: BrandingPayload, clientId: string) {
  return {
    client_id: clientId,
    font_link: data.fontLink,
    brand_color_primary: data.primaryBrandColor,
    brand_color_secondary: data.secondaryBrandColor,
    company_logo_url: data.logoUrl,
    team_photos_url: data.teamPhotoUrls,
    team_members: data.teamMembers,
    ceo_intro_video_url: data.ceoVideoUrl,
    video_testimonials_urls: data.videoTestimonialUrl
      ? [data.videoTestimonialUrl]
      : [],
    updated_at: new Date().toISOString(),
  };
}

function mapBrandingFromDb(data: any): BrandingPayload {
  return {
    fontLink: data.font_link || "",
    primaryBrandColor: data.brand_color_primary || "",
    secondaryBrandColor: data.brand_color_secondary || "",
    logoUrl: data.company_logo_url || "",
    teamPhotoUrls: data.team_photos_url || [],
    teamMembers: data.team_members || [],
    ceoVideoUrl: data.ceo_intro_video_url || "",
    videoTestimonialUrl: data.video_testimonials_urls?.[0] || "",
    videoCreationOption: "upload",
  };
}

export const getBusinessInfoService = async (userId: string) => {
  console.log(`[getBusinessInfo] 🟢 Starting fetch for User ID: ${userId}`);

  const { data: client, error } = await supabaseAdmin
    .from("clients")
    .select("*, client_social_links(*)")
    .eq("user_id", userId)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error(
      `[getBusinessInfo] 🔴 DB Error fetching client:`,
      error.message
    );
    throw new Error(`Failed to fetch client info: ${error.message}`);
  }

  if (!client) {
    console.log(
      `[getBusinessInfo] 🟡 No existing client profile found for User ID: ${userId}`
    );
    return null;
  }

  console.log(`[getBusinessInfo] ✅ Client found. ID: ${client.id}`);

  const { client_social_links, ...clientData } = client;
  const socials = Array.isArray(client_social_links)
    ? client_social_links[0]
    : client_social_links;

  const businessInfo = mapFromDb(clientData, socials);

  return businessInfo;
};

export const saveBusinessInfoService = async (
  userId: string,
  data: BusinessFormData
) => {
  console.log(
    `[saveBusinessInfo] 🟢 Starting save operation for User ID: ${userId}`
  );
  const { clientData, socialsData } = mapToDb(data, userId);

  console.log(`[saveBusinessInfo] ⏳ Upserting core client data...`);

  const { data: client, error: clientError } = await supabaseAdmin
    .from("clients")
    .upsert(clientData, { onConflict: "user_id" })
    .select("id")
    .single();

  if (clientError) {
    console.error(
      `[saveBusinessInfo] 🔴 Error upserting client:`,
      clientError.message
    );
    throw new Error(`Failed to save client info: ${clientError.message}`);
  }

  if (!client) {
    console.error(
      `[saveBusinessInfo] 🔴 Operation failed: Client data returned null.`
    );
    throw new Error("Client operation failed.");
  }

  console.log(
    `[saveBusinessInfo] ✅ Client core data saved. Client ID: ${client.id}`
  );

  console.log(`[saveBusinessInfo] ⏳ Processing social links...`);

  const { error: socialError } = await supabaseAdmin
    .from("client_social_links")
    .upsert(
      {
        client_id: client.id,
        ...socialsData,
      },
      { onConflict: "client_id" }
    );

  if (socialError) {
    console.error(
      `[saveBusinessInfo] 🔴 Error upserting socials:`,
      socialError.message
    );
    throw new Error(`Failed to save social links: ${socialError.message}`);
  }

  console.log(`[saveBusinessInfo] ✅ Social links saved.`);
  console.log(`[saveBusinessInfo] 🏁 Operation complete successfully.`);

  return { clientId: client.id };
};

export const getBrandingService = async (userId: string) => {
  console.log(`[getBranding] 🟢 Fetching for User ID: ${userId}`);

  // 1. Get Client ID
  const { data: client, error: clientError } = await supabaseAdmin
    .from("clients")
    .select("id")
    .eq("user_id", userId)
    .single();

  if (clientError || !client) {
    console.log(`[getBranding] 🟡 Client not found.`);
    return null;
  }

  // 2. Get Branding Assets
  const { data: branding, error: brandingError } = await supabaseAdmin
    .from("branding_assets")
    .select("*")
    .eq("client_id", client.id)
    .single();

  if (brandingError && brandingError.code !== "PGRST116") {
    console.error(`[getBranding] 🔴 DB Error:`, brandingError.message);
    throw new Error(`Failed to fetch branding info`);
  }

  if (!branding) {
    return null;
  }

  // 3. Map to CamelCase
  return mapBrandingFromDb(branding);
};

export const saveBrandingService = async (
  userId: string,
  data: BrandingPayload
) => {
  console.log(`[saveBranding] 🟢 Starting save for User ID: ${userId}`);

  // 1. Find the Client ID first
  const { data: client, error: clientError } = await supabaseAdmin
    .from("clients")
    .select("id")
    .eq("user_id", userId)
    .single();

  if (clientError || !client) {
    throw new Error(
      "Client profile not found. Please complete business info first."
    );
  }

  // 2. Map payload to DB schema
  const dbPayload = mapBrandingToDb(data, client.id);

  console.log(`[saveBranding] ⏳ Upserting branding assets...`);

  const { data: savedData, error } = await supabaseAdmin
    .from("branding_assets")
    .upsert(dbPayload, { onConflict: "client_id" })
    .select()
    .single();

  console.log("savedData is ", savedData);

  if (error) {
    console.error(`[saveBranding] 🔴 DB Error:`, error.message);
    throw new Error(`Failed to save branding assets: ${error.message}`);
  }

  console.log(`[saveBranding] ✅ Branding assets saved.`);
  return savedData;
};

function mapWebsiteSetupFromDb(data: any): WebsiteSetupPayload {
  return {
    accessGranted: false,
    domainProvider: data.domain_provider || "",
    businessClientsWorked: data.business_clients_worked || [],
    legalFiles: data.legal_docs || [],
    legalLinks: data.legal_links || [],
    seoLocations: data.seo_locations || [],
  };
}

function mapWebsiteSetupToDb(payload: WebsiteSetupPayload, userId: string) {
  return {
    client_id: userId,
    domain_provider: payload.domainProvider,
    business_clients_worked: payload.businessClientsWorked,
    legal_docs: payload.legalFiles,
    legal_links: payload.legalLinks,
    seo_locations: payload.seoLocations,
    updated_at: new Date().toISOString(),
  };
}

export const getWebsiteSetupService = async (userId: string) => {
  console.log(`[getWebsiteSetup] 🟢 Starting fetch for User ID: ${userId}`);

  // 1. Get Client ID from User ID
  const { data: client, error: clientError } = await supabaseAdmin
    .from("clients")
    .select("id")
    .eq("user_id", userId) // Assuming clients table has a user_id column
    .single();

  if (clientError || !client) {
    console.log(`[getWebsiteSetup] 🟡 Client not found for User ID: ${userId}`);
    return null; // No client means no website info yet
  }

  // 2. Fetch Website Info using Client ID
  const { data, error } = await supabaseAdmin
    .from("website_info")
    .select("*")
    .eq("client_id", client.id)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error(`[getWebsiteSetup] 🔴 DB Error:`, error.message);
    throw new Error(`Database error fetching website info: ${error.message}`);
  }

  if (!data) {
    console.log(
      `[getWebsiteSetup] 🟡 No website info found for Client ID: ${client.id}`
    );
    return null;
  }

  console.log(`[getWebsiteSetup] ✅ Data retrieved successfully.`);
  return mapWebsiteSetupFromDb(data);
};

export const saveWebsiteSetupService = async (
  userId: string,
  payload: WebsiteSetupPayload
) => {
  console.log(`[saveWebsiteSetup] 🟢 Starting save for User ID: ${userId}`);

  // Validation
  if (!payload.domainProvider) {
    throw new Error("Domain provider is required.");
  }

  // 1. Find the Client ID first! (CRITICAL FIX)
  const { data: client, error: clientError } = await supabaseAdmin
    .from("clients")
    .select("id")
    .eq("user_id", userId)
    .single();

  if (clientError || !client) {
    console.error(
      `[saveWebsiteSetup] 🔴 Client not found for User ID: ${userId}`
    );
    throw new Error(
      "Client profile not found. Please complete the Business Information step first."
    );
  }

  // 2. Use the Client ID for the website_info mapping
  const dbData = mapWebsiteSetupToDb(payload, client.id);

  console.log(
    `[saveWebsiteSetup] ⏳ Upserting website info for Client ID: ${client.id}...`
  );

  const { data, error } = await supabaseAdmin
    .from("website_info")
    .upsert(dbData, { onConflict: "client_id" })
    .select()
    .single();

  if (error) {
    console.error(`[saveWebsiteSetup] 🔴 DB Error:`, error.message);
    throw new Error(`Failed to save website information: ${error.message}`);
  }

  console.log(`[saveWebsiteSetup] ✅ Save successful.`);

  return {
    ...mapWebsiteSetupFromDb(data),
    accessGranted: payload.accessGranted,
  };
};

function mapAdsBudgetFromDb(data: any): LocationsBudgetForm {
  return {
    budget: data.monthly_budget ? String(data.monthly_budget) : "",
    currency: data.currency || "EUR",
    locations: data.seo_locations || [],
    services: data.services_provided || [],
  };
}

function mapAdsBudgetToDb(data: LocationsBudgetForm, clientId: string) {
  return {
    client_id: clientId,
    monthly_budget: Number(data.budget),
    currency: data.currency,
    seo_locations: data.locations,
    services_provided: data.services,
    updated_at: new Date().toISOString(),
  };
}

export const getAdsBudgetService = async (userId: string) => {
  console.log(`[getAdsBudget] 🟢 Starting fetch for User ID: ${userId}`);

  const { data: client, error: clientError } = await supabaseAdmin
    .from("clients")
    .select("id")
    .eq("user_id", userId)
    .single();

  if (clientError || !client) {
    console.log(`[getAdsBudget] 🟡 Client not found for User ID: ${userId}`);
    return null;
  }

  const { data, error } = await supabaseAdmin
    .from("ads_budget")
    .select("*")
    .eq("client_id", client.id)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error(`[getAdsBudget] 🔴 DB Error:`, error.message);
    throw new Error(`Database error fetching ads budget: ${error.message}`);
  }

  if (!data) {
    console.log(
      `[getAdsBudget] 🟡 No ads budget found for Client ID: ${client.id}`
    );
    return null;
  }

  console.log(`[getAdsBudget] ✅ Data retrieved successfully.`);
  return mapAdsBudgetFromDb(data);
};

export const saveAdsBudgetService = async (
  userId: string,
  payload: LocationsBudgetForm
) => {
  console.log(`[saveAdsBudget] 🟢 Starting save for User ID: ${userId}`);

  const { data: client, error: clientError } = await supabaseAdmin
    .from("clients")
    .select("id")
    .eq("user_id", userId)
    .single();

  if (clientError || !client) {
    console.error(`[saveAdsBudget] 🔴 Client not found for User ID: ${userId}`);
    throw new Error(
      "Client profile not found. Please complete the Business Information step first."
    );
  }

  const dbData = mapAdsBudgetToDb(payload, client.id);

  console.log(
    `[saveAdsBudget] ⏳ Checking for existing ads budget for Client ID: ${client.id}...`
  );

  // Manual upsert: Check if record exists first to avoid unique constraint error
  const { data: existingBudget } = await supabaseAdmin
    .from("ads_budget")
    .select("id")
    .eq("client_id", client.id)
    .single();

  let data, error;

  if (existingBudget) {
    console.log(`[saveAdsBudget] 🔄 Updating existing budget...`);
    const result = await supabaseAdmin
      .from("ads_budget")
      .update(dbData)
      .eq("client_id", client.id)
      .select()
      .single();
    data = result.data;
    error = result.error;
  } else {
    console.log(`[saveAdsBudget] 🆕 Creating new budget...`);
    const result = await supabaseAdmin
      .from("ads_budget")
      .insert(dbData)
      .select()
      .single();
    data = result.data;
    error = result.error;
  }

  if (error) {
    console.error(`[saveAdsBudget] 🔴 DB Error:`, error.message);
    throw new Error(`Failed to save ads budget: ${error.message}`);
  }

  console.log(`[saveAdsBudget] ✅ Save successful.`);

  return mapAdsBudgetFromDb(data);
};
