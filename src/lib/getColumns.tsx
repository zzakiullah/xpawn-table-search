import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const getColumns = (headers: string[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: ColumnDef<any>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

  for (let i = 0; i < headers.length; i++) {
    columns.push({
      accessorKey: headers[i],
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="-mx-3 font-mono"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {headers[i]}
            <LuArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue(headers[i])}</div>,
    });
  }

  return columns;
};
