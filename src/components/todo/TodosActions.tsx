"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TodosActions() {
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
              <Select name="priority" defaultValue='ANY'>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">ANY</SelectItem>
                  <SelectItem value="dark">P1</SelectItem>
                  <SelectItem value="system">P2</SelectItem>
                  <SelectItem value="dark">P3</SelectItem>
                  <SelectItem value="system">P4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}

export default TodosActions;
