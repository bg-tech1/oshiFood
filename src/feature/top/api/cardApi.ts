import type { CardProps } from "../../../components/Card/Card";
import { supabaseClient } from "../../../libs/supabaseClient";
import type { PostgrestError } from "@supabase/supabase-js";
export const fetchCards = async (): Promise<{
  data: CardProps[];
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabaseClient
    .from("OshiFoodDB")
    .select("*")
    .order("created_at", { ascending: false });
  return { data: data as CardProps[], error };
};
export const insertCard = async (
  card: CardProps
): Promise<{ error: PostgrestError | null }> => {
  const { error } = await supabaseClient.from("OshiFoodDB").insert([card]);
  return { error };
};
