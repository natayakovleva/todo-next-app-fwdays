import TodosActions from "@/components/todo/TodosActions";



export default async function Todos(props: { searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="m-7">
      <TodosActions></TodosActions>
    </div>
    
  )
}

