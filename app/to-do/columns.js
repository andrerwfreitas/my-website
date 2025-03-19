import {Checkbox} from "@/components/ui/checkbox";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal, Pencil, Trash2} from "lucide-react";
import {
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"


export const columns = (toggleCompleted) => [{
  accessorKey: "completed", header: "Done", cell: ({row}) => {
    const task = row.original;
    return (<Checkbox
      checked={task.completed}
      onCheckedChange={(value) => toggleCompleted(task.id, value)}
      aria-label="Mark as done"
    />);
  },
}, {
  accessorKey: "task", header: "Task",
}, {
  id: "actions", enableHiding: false, cell: ({row}) => {
    const payment = row.original

    return (<div className="flex gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Pencil/>
          </Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Trash2/>
          </Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

    </div>)
  },
},];
