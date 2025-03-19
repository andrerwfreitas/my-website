"use client";

import { Checkbox } from "@/components/ui/checkbox";
import ActionCell from "./ActionCell";

export const columns = ({ toggleCompleted, setData }) => [{
  accessorKey: "completed", header: "Done", cell: ({ row }) => {
    const task = row.original;
    return (
      <Checkbox
        checked={task.completed}
        onCheckedChange={(value) => toggleCompleted(task.id, value)}
        aria-label="Mark as done"
      />
    );
  },
}, {
  accessorKey: "task", header: "Task",
}, {
  id: "actions", enableHiding: false, cell: ({ row }) => {
    const task = row.original;
    return <ActionCell task={task} setData={setData} />;
  },
}];