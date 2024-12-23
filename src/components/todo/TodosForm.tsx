"use client";

import { Todo } from "@/types/todo";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Priority } from "@/constants/todos";
import { Button } from "../ui/button";

import addTodo from "@/app/todos/actions/addTodos";
// import updateTodo from "@/app/todos/actions/updateTodo";

type Props = {
  isUpdateTodo?: boolean;
  todo?: Todo;
};

export const TodosForm: React.FC<Props> = ({ todo, isUpdateTodo = false }) => {
  return (
    <form action={isUpdateTodo ? updateTodo : addTodo}>
      <input type="hidden" name="id" value={todo?.id} />

      <div>
        <Label htmlFor="title">Title</Label>
        <Input name="title" id="title" required defaultValue={todo?.title}/>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea name="description" required defaultValue={todo?.description}/>
      </div>
      <div>
        <Label htmlFor="due_date">Due Date</Label>
        <Input name="due_date" id="due_date" type="date" required defaultValue={todo?.due_date}/>
      </div>
      <div>
        <Label htmlFor="priority">Priority</Label>
        <Select name="priority" required defaultValue={todo?.priority ?? Priority.ANY}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={Priority.P1}>P1</SelectItem>
            <SelectItem value={Priority.P2}>P2</SelectItem>
            <SelectItem value={Priority.P3}>P3</SelectItem>
            <SelectItem value={Priority.P4}>P4</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Checkbox name="completed" id="completed" defaultChecked={todo?.completed || false}/>
        <Label htmlFor="completed">Is Completed</Label>
      </div>
      <Button type="submit">{isUpdateTodo ? 'Update' : 'Add'}</Button>
    </form>
  );
};
