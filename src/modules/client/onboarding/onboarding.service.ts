import { supabaseAdmin } from "@/config/db";
import {
  BrandingInput,
  BusinessInfoInput,
  WebsiteInput,
} from "./onboarding.schema";

export const saveBusinessInfoService = async (
  userId: string,
  data: BusinessInfoInput
) => {
  const { socials, ...clientData } = data;

  const { data: client, error: clientError } = await supabaseAdmin
    .from("clients")
    .insert([clientData])
    .select("id")
    .single();

  if (clientError) {
    throw new Error(`Failed to save client info: ${clientError.message}`);
  }

  if (!client) {
    throw new Error("Client created but no ID returned.");
  }

  if (socials) {
    const { error: socialError } = await supabaseAdmin
      .from("client_social_links")
      .insert([
        {
          client_id: client.id,
          ...socials,
        },
      ]);

    if (socialError) {
      throw new Error(`Failed to save social links: ${socialError.message}`);
    }
  }

  return { clientId: client.id };
};

export const saveBrandingService = async (data: BrandingInput) => {
  const { client_id, ...brandingData } = data;

  const { data: clientExists, error: checkError } = await supabaseAdmin
    .from("clients")
    .select("id")
    .eq("id", client_id)
    .single();

  if (checkError || !clientExists) {
    throw new Error("Client not found. Please complete business info first.");
  }

  const { data: savedData, error } = await supabaseAdmin
    .from("branding_assets")
    .upsert(
      {
        client_id,
        ...brandingData,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "client_id" }
    )
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to save branding assets: ${error.message}`);
  }

  return savedData;
};

export const saveWebsiteInfoService = async (data: WebsiteInput) => {
  const { client_id, ...websiteData } = data;
  const { data: clientExists, error: checkError } = await supabaseAdmin
    .from("clients")
    .select("id")
    .eq("id", client_id)
    .single();

  if (checkError || !clientExists) {
    throw new Error("Client not found. Please start from the beginning.");
  }

  const { data: savedData, error } = await supabaseAdmin
    .from("website_info")
    .upsert(
      {
        client_id,
        ...websiteData,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "client_id" }
    )
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to save website info: ${error.message}`);
  }

  return savedData;
};
