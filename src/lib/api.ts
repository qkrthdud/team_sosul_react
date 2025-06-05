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
  limit?: number;
  offset?: number;
};

// 🔷 CRUD 공통 타입
type FetchOptions<T extends TableName> =
  | SelectOptions<T> // select
  | { data: Tables[T]["Insert"] } // insert
  | { data: Partial<Tables[T]["Update"]>; match: Partial<Tables[T]["Row"]> } // update
  | { match: Partial<Tables[T]["Row"]> }; // delete

// 🔷 반환 타입
type FetchReturn<T extends TableName, O extends Operation> =
  O extends "select"
    ? { data: Tables[T]["Row"][]; count: number | null }
    : Tables[T]["Row"][] | null;

// 🔷 fetchData 함수
export const fetchData = async <
  T extends TableName,
  O extends Operation
>(
  tableName: T,
  operation: O,
  options?: FetchOptions<T>
): Promise<FetchReturn<T, O>> => {
  try {
    if (operation === "select") {
      const selectOptions = (options ?? {}) as SelectOptions<T>;
      const columns = selectOptions.columns ?? "*";

      let query = supabase
        .from<T, Tables[T]["Row"]>(tableName)
        .select(columns, { count: "exact" });

      if (selectOptions.match) {
        query = query.match(selectOptions.match);
      }

      if (selectOptions.order) {
        query = query.order(selectOptions.order.column as string, {
          ascending: selectOptions.order.ascending,
        });
      }

      if (selectOptions.limit !== undefined) {
        query = query.limit(selectOptions.limit);
      }

      if (selectOptions.offset !== undefined) {
        query = query.range(
          selectOptions.offset,
          selectOptions.offset + (selectOptions.limit ?? 0) - 1
        );
      }

      const response = await query;

      const { data, count, error } = response as {
        data: Tables[T]["Row"][] | null;
        count: number | null;
        error: Error | null;
      };

      if (error) throw error;

      return { data: data ?? [], count } as FetchReturn<T, O>;
    }

    if (operation === "insert") {
      const insertOptions = options as { data: Tables[T]["Insert"] };
      const { data, error } = await supabase
        .from(tableName)
        .insert(insertOptions.data);
      if (error) throw error;
      return data as FetchReturn<T, O>;
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
      return data as FetchReturn<T, O>;
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
      return data as FetchReturn<T, O>;
    }

    throw new Error("Invalid operation");
  } catch (error) {
    console.error(`Error performing ${operation} on ${tableName}:`, error);
    throw error;
  }
};
