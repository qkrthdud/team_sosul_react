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
      if (operation === "select") {
        const selectOptions = options as Extract<FetchOptions<T>, { columns?: string }>;

        let query = supabase.from<T, Tables[T]["Row"]>(tableName).select(selectOptions.columns || "*");
  
        if (selectOptions.order) {
          query = query.order(selectOptions.order.column  as string, {
            ascending: selectOptions.order.ascending,
          });
        }
  
        const response = await query;
        const { data, error } = response as {
          data: Tables[T]["Row"][] | null;
          error: Error | null;
        };
        if (error) throw error;
        return data; 
      }
  
      if (operation === "insert") {
        const insertOptions = options as Extract<FetchOptions<T>, { data: Tables[T]["Insert"] }>;
        const { data, error } = await supabase
          .from(tableName)
          .insert(insertOptions.data);
        if (error) throw error;
        return data;
      }
  
      if (operation === "update") {
        const updateOptions = options as Extract<
          FetchOptions<T>,
          { data: Partial<Tables[T]["Update"]>; match: Partial<Tables[T]["Row"]> }
        >;
        const { data, error } = await supabase
          .from(tableName)
          .update(updateOptions.data)
          .match(updateOptions.match);
        if (error) throw error;
        return data;
      }
  
      if (operation === "delete") {
        const deleteOptions = options as Extract<
          FetchOptions<T>,
          { match: Partial<Tables[T]["Row"]> }
        >;
        const { data, error } = await supabase
          .from(tableName)
          .delete()
          .match(deleteOptions.match);
        if (error) throw error;
        return data;
      }
  
      throw new Error("Invalid operation");
    } catch (error) {
      console.error(`Error performing ${operation} on ${tableName}:`, error);
      throw error;
    }
  };
  
  







const BUCKET_NAME = "upload";

export const uploadFile = async (
  file: File,
  folder: string = "campground-photos"
): Promise<string> => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error("파일 업로드 실패:", error);
    throw error;
  }
};


