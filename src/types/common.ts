import type { Database } from "./supabase.types";
export type Category = Database["public"]["Tables"]["categories"]["Row"];