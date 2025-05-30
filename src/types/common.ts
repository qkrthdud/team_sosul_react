import type { Database } from "./supabase.types";
export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Campaign_features = Database["public"]["Tables"]["campaign_features"]["Row"];