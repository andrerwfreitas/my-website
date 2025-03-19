import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function ActionCell({ task, setData }) {
  const [editTaskName, setEditTaskName] = useState("");

  const editTaskById = (id, newTaskName) => {
    setData((prevData) =>
      prevData.map((task) =>
        task.id === id ? { ...task, task: newTaskName } : task
      )
    );
  };

  const deleteTaskById = (id) => {
    setData((prevData) => prevData.filter((task) => task.id !== id));
  };

  return (
    <div className="flex gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Pencil />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editTaskById(task.id, editTaskName);
            }}
            className="flex gap-2"
          >
            <Input
              type="text"
              placeholder="Name"
              className="mb-2 grow"
              onChange={(e) => setEditTaskName(e.target.value)}
            />
            <Button type="submit">Edit</Button>
          </form>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" >
            <Trash2 />
          </Button>
        </PopoverTrigger>
        <PopoverContent><Button variant="destructive" className="w-full" onClick={() => deleteTaskById(task.id)}>Delete task</Button></PopoverContent>
      </Popover>
    </div>
  );
}