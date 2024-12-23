"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

import { useRouter } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Priority, Status, SortBy } from "@/constants/todos";
import { Button } from "@/components/ui/button"

function TodosActions() {
  const router = useRouter();


  const handleReset = () => {
    router.push("/todos");
  };

  return (
    <section className="p-7">
      <Card>
        <CardHeader>
          <CardTitle>Todos Query</CardTitle>
        </CardHeader>
        <form>
          <CardContent>
            <div>
              <Label htmlFor="due_date">Due date</Label>
              <Input id="due_date" type="date" />
            </div>
            <div>
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority" defaultValue={Priority.ANY}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Priority.ANY}>ANY</SelectItem>
                  <SelectItem value={Priority.P1}>P1</SelectItem>
                  <SelectItem value={Priority.P2}>P2</SelectItem>
                  <SelectItem value={Priority.P3}>P3</SelectItem>
                  <SelectItem value={Priority.P4}>P4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="completed">Completion status</Label>
              <Select name='completed' defaultValue='All'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Status.ALL}>All</SelectItem>
                  <SelectItem value={Status.COMPLETED}>Completed</SelectItem>
                  <SelectItem value={Status.IN_PROGRESS}>In progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="sortBy">Sort by</label>
              <Select name="sortBy" defaultValue={SortBy.TITLE}>
              <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={SortBy.TITLE}>Title</SelectItem>
                  <SelectItem value={SortBy.PRIORITY}>Priority</SelectItem>
                  <SelectItem value={SortBy.DUE_DATE}>Due Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="button" 
            onClick={handleReset}
            >
              Reset
            </Button>
            <Button type="submit">
              Apply
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}

export default TodosActions;
