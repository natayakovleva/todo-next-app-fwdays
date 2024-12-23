import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { getTodos } from '@/app/todos/actions/getTodos'


export async function TodosList({ searchParams }: { searchParams: any }) {

  const { data: todos } = await getTodos(searchParams);

  if(!todos?.length){
    return null;
  }

  return (
    <section>
      <div>
        <Accordion type="single" collapsible>
          {todos?.map((todo) => (
            <AccordionItem value={todo.id}>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          ))} 
        </Accordion>
      </div>
    </section>
  );
}
