"use server";

import { createClient } from "@/utils/supabase/server";
import { Todo } from "@/types/todo";
import { cookies } from "next/headers";
import { Priority, SortBy } from "@/constants/todos";

export async function getTodos(searchParams: any): Promise<{ data: Todo[] }> {


  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);


  let query = supabase
    .from("todos")
    .select()
    ;

    const { data, error } = await query;
    if (error) {
      throw new Error(`Failed to fetch todos: ${error.message}`);
    }

  return { data: data as Todo[] };
}
