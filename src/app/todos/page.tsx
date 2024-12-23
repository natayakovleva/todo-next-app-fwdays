import TodosActions from "@/components/todo/TodosActions";
import Link from "next/link";
import { TodosList } from '@/components/todo/TodosList';

export default async function Todos(props: { searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;
  return (
    <section className="m-7">
      <TodosActions searchParams={searchParams}></TodosActions>
      <TodosList searchParams={searchParams}></TodosList>
      <Link href='/todos/create'>Create a new todo</Link>
    </section>
    
  )
}

