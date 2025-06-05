import { supabase } from "../lib/supabaseClient";
import type { Database } from "../types/supabase.types";

// 🔷 타입 정의
type Tables = Database["public"]["Tables"];
export type TableName = keyof Tables;
type Operation = "select" | "insert" | "update" | "delete";

// 🔷 Select 전용 타입 분리
type SelectOptions<T extends TableName> = {
  columns?: string;
  match?: Partial<Tables[T]["Row"]>;
  order?: { column: keyof Tables[T]["Row"]; ascending: boolean };
};

// 🔷 CRUD 공통 타입
type FetchOptions<T extends TableName> =
  | SelectOptions<T> // select
  | { data: Tables[T]["Insert"] } // insert
  | { data: Partial<Tables[T]["Update"]>; match: Partial<Tables[T]["Row"]> } // update
  | { match: Partial<Tables[T]["Row"]> }; // delete

// 🔷 fetchData 함수
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

      const selectOptions = (options ?? {}) as SelectOptions<T>;     
      const columns = selectOptions.columns ?? "*";
      
      let query = supabase
        .from<T, Tables[T]["Row"]>(tableName)
        .select(columns);

      if (selectOptions.match) {
        query = query.match(selectOptions.match);
      }

      if (selectOptions.order) {
        query = query.order(selectOptions.order.column as string, {
          ascending: selectOptions.order.ascending,
        });
      }

      const response = await query;

        const { data, error } = response as {
          data: Tables[T]["Row"][] | null;
          error: Error | null;
        };
      
        if (error) {
          throw error;
        }
      
        return data;
    }

    if (operation === "insert") {
      const insertOptions = options as { data: Tables[T]["Insert"] };
      const { data, error } = await supabase
        .from(tableName)
        .insert(insertOptions.data);
      if (error) throw error;
      return data;
    }

    if (operation === "update") {
      const updateOptions = options as {
        data: Partial<Tables[T]["Update"]>;
        match: Partial<Tables[T]["Row"]>;
      };
      const { data, error } = await supabase
        .from(tableName)
        .update(updateOptions.data)
        .match(updateOptions.match);
      if (error) throw error;
      return data;
    }

    if (operation === "delete") {
      const deleteOptions = options as {
        match: Partial<Tables[T]["Row"]>;
      };
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

