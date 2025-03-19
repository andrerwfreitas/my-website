"use client";

import { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Navbar from "@/components/Navbar";
import PageMargin from "@/components/PageMargin";
import Text from "@/components/Text";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";

export default function Page() {
  const [data, setData] = useState([
  ]);
  const [newTaskName, setNewTaskName] = useState("");

  const toggleCompleted = (id, value) => {
    setData((prevData) =>
      prevData.map((task) =>
        task.id === id ? { ...task, completed: value } : task
      )
    );
  };


  const addTask = (newTaskName) => {
    event.preventDefault();
    const newTask = { id: data.length + 1, task: newTaskName, completed: false };
    setData([...data, newTask]);
  };

  return (
      <>
        <Navbar />
        <PageMargin>
          <Text variant="h2" className="mb-3 text-center">
            To-Do list</Text>
          <div className="flex items-center mb-3 gap-2">
            <Input
              placeholder="Search tasks"
              className="grow"
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button>New task</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New task</DialogTitle>
                </DialogHeader>
                <form  onSubmit={() => addTask(newTaskName)} className="flex gap-2">
                  <Input type="text" placeholder="Name" className="mb-2 grow" onChange={(e) => setNewTaskName(e.target.value)} />
                  <Button type="submit">Add</Button>
                </form>
              </DialogContent>
            </Dialog>

          </div>
          <DataTable columns={columns(toggleCompleted)} data={data} />
        </PageMargin>
      </>
  );
}
