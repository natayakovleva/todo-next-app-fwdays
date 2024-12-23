
import { getTodos } from "@/app/todos/actions/getTodos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import deleteTodo from "@/app/todos/actions/deleteTodo";
import { Button } from "@/components/ui/button";
import { TodosForm } from "@/components/todo/TodosForm";

export async function TodosList({ searchParams }: { searchParams: any }) {
  const { data: todos } = await getTodos(searchParams);

  
  if(!todos?.length){
    return null;
  }

  return (
    <section>
      <div >
        <Accordion type="single" collapsible>
          {todos?.map((todo) => (
            <AccordionItem
              value={todo.id}
              key={todo.id}
              
            >
              <AccordionTrigger>
                <span >
                  Priority: {todo.priority} | Due: {todo.due_date} | Task: {todo.title}
                </span>
                <span
                  
                >
                  {todo.completed ? "Completed" : "In Progress"}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <form
                  action={deleteTodo}
                  
                >
                  <input type="hidden" name="id" value={todo.id} />
                  <Button variant="destructive" type="submit">
                    Delete
                  </Button>
                </form>
                <div >
                  <TodosForm todo={todo} isUpdateTodo />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
