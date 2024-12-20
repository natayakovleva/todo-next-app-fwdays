"use client";
import { Todo } from "@/types/todo";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Priority, Status, SortBy } from "@/constants/todos";
import { Button } from "../ui/button";


type Props = {
  isUpdateTodo?: boolean;
  todo?: Todo;
};

export const TodosForm: React.FC<Props> = ({ todo, isUpdateTodo = false }) => {
  return (
    <form>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" required/>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input required/>
      </div>
      <div>
        <Label htmlFor="due_date">Due Date</Label>
        <Input id="due_date" type="date" required/>
      </div>
      <div>
        <Label htmlFor="priority">Priority</Label>
        <Select
          name="priority"
          required
        >
          <SelectTrigger >
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
        <Checkbox id="completed" defaultChecked={false}/>
        <Label htmlFor="completed">Is Completed</Label>
      </div>
      <Button type="submit">Add</Button>
    </form>
  )
}

