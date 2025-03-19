"use client";

import { useState, useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Navbar from "@/components/Navbar";
import PageMargin from "@/components/PageMargin";
import Text from "@/components/Text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Page() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredData(
      data.filter((task) =>
        task.task.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

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
        <Text variant="h2" className="mb-2 text-center">
          To-Do list
        </Text>
        <Text variant="p" className="mb-3 text-center">
          &#34;Save&#34; option coming soon!
        </Text>
        <div className="flex items-center mb-3 gap-2">
          <Input
            placeholder="Search tasks"
            className="grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button>New task</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New task</DialogTitle>
              </DialogHeader>
              <form onSubmit={() => addTask(newTaskName)} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Name"
                  className="mb-2 grow"
                  onChange={(e) => setNewTaskName(e.target.value)}
                />
                <Button type="submit">Add</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <DataTable columns={columns({ toggleCompleted, setData })} data={filteredData} />
      </PageMargin>
    </>
  );
}
