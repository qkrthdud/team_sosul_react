import { supabase } from "../lib/supabaseClient";
import type { Database } from "../types/supabase.types";

type Tables = Database["public"]["Tables"];
export type TableName = keyof Tables;

type Operation = "select" | "insert" | "update" | "delete";

type FetchOptions<T extends TableName> =
  | {
      columns?: string;
      order?: { column: keyof Tables[T]["Row"]; ascending: boolean };
    } // select
  | {
      data: Tables[T]["Insert"];
    } // insert
  | {
      data: Partial<Tables[T]["Update"]>;
      match: Partial<Tables[T]["Row"]>;
    } // update
  | {
      match: Partial<Tables[T]["Row"]>;
    }; // delete

export const fetchData = async <
  T extends TableName,
  O extends Operation
>(
  tableName: T,
  operation: O,
  options?: FetchOptions<T>
): Promise<Tables[T]["Row"][] | null> => {
  try {
    let query = supabase.from(tableName);

    switch (operation) {
      case "select":
        query = query.select((options as any).columns || "*");
        if ((options as any).order) {
          query = query.order((options as any).order.column, {
            ascending: (options as any).order.ascending,
          });
        }
        break;
      case "insert":
        query = query.insert((options as any).data);
        break;
      case "update":
        query = query.update((options as any).data).match((options as any).match);
        break;
      case "delete":
        query = query.delete().match((options as any).match);
        break;
      default:
        throw new Error("Invalid operation");
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error(`Error performing ${operation} on ${tableName}:`, error);
    throw error;
  }
};
