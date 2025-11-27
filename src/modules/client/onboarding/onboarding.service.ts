import { supabaseAdmin } from "@/config/db";
import { BusinessInfoInput } from "./onboarding.schema";

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
