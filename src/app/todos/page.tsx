import TodosActions from "@/components/todo/TodosActions";
import Link from "next/link";


export default async function Todos(props: { searchParams: Promise<any> }) {
  // const searchParams = await props.searchParams;
  return (
    <section className="m-7">
      <TodosActions></TodosActions>
      <Link href='/todos/create'>Create a new todo</Link>
    </section>
    
  )
}

