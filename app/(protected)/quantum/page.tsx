"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AreaChartInteractive from "@/chart/area-chart";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  date: string;
  method: string;
  currency: string;
  transactionId: string;
};

const paymentStatusColors: { [key in Payment["status"]]: string } = {
  success: "green",
  processing: "yellow",
  pending: "blue",
  failed: "red",
};

export const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
    date: "2024-11-27T09:00:00Z",
    method: "credit_card",
    currency: "USD",
    transactionId: "TX123456789",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    date: "2024-11-26T14:15:00Z",
    method: "paypal",
    currency: "USD",
    transactionId: "TX987654321",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    date: "2024-11-25T18:45:00Z",
    method: "bank_transfer",
    currency: "USD",
    transactionId: "TX123789456",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
    date: "2024-11-24T10:30:00Z",
    method: "credit_card",
    currency: "USD",
    transactionId: "TX456123789",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    date: "2024-11-23T21:10:00Z",
    method: "paypal",
    currency: "USD",
    transactionId: "TX741852963",
  },
  {
    id: "a1b2c3d4",
    amount: 1023,
    status: "success",
    email: "jackson88@outlook.com",
    date: "2024-11-22T11:50:00Z",
    method: "credit_card",
    currency: "USD",
    transactionId: "TX321654987",
  },
  {
    id: "b5d7e9f2",
    amount: 458,
    status: "processing",
    email: "emily76@gmail.com",
    date: "2024-11-21T15:20:00Z",
    method: "paypal",
    currency: "USD",
    transactionId: "TX258147369",
  },
  {
    id: "c8h9i0j7",
    amount: 612,
    status: "pending",
    email: "lucas34@yahoo.com",
    date: "2024-11-20T09:40:00Z",
    method: "bank_transfer",
    currency: "USD",
    transactionId: "TX963852741",
  },
  {
    id: "d0k2l4m6",
    amount: 132,
    status: "success",
    email: "olivia22@hotmail.com",
    date: "2024-11-19T17:00:00Z",
    method: "credit_card",
    currency: "USD",
    transactionId: "TX753159852",
  },
  {
    id: "e7n8o9p1",
    amount: 265,
    status: "failed",
    email: "noah58@gmail.com",
    date: "2024-11-18T12:30:00Z",
    method: "paypal",
    currency: "USD",
    transactionId: "TX951357468",
  },
  {
    id: "f1q2r3s0",
    amount: 145,
    status: "success",
    email: "mia23@yahoo.com",
    date: "2024-11-17T08:15:00Z",
    method: "credit_card",
    currency: "USD",
    transactionId: "TX753456789",
  },
  {
    id: "g1h2i3j4",
    amount: 720,
    status: "processing",
    email: "zoe33@gmail.com",
    date: "2024-11-16T16:45:00Z",
    method: "bank_transfer",
    currency: "USD",
    transactionId: "TX654789123",
  },
  {
    id: "h4j5k6l7",
    amount: 905,
    status: "pending",
    email: "sophia44@outlook.com",
    date: "2024-11-15T14:00:00Z",
    method: "paypal",
    currency: "USD",
    transactionId: "TX147852369",
  },
  {
    id: "i6l7m8n9",
    amount: 330,
    status: "success",
    email: "charlie21@yahoo.com",
    date: "2024-11-14T13:35:00Z",
    method: "credit_card",
    currency: "USD",
    transactionId: "TX963147852",
  },
  {
    id: "j1m2n3o4",
    amount: 522,
    status: "failed",
    email: "ava19@gmail.com",
    date: "2024-11-13T10:00:00Z",
    method: "bank_transfer",
    currency: "USD",
    transactionId: "TX258369741",
  },
  {
    id: "k2n3o4p5",
    amount: 670,
    status: "success",
    email: "mason55@yahoo.com",
    date: "2024-11-12T09:15:00Z",
    method: "paypal",
    currency: "USD",
    transactionId: "TX852741963",
  },
  {
    id: "l4p5q6r7",
    amount: 915,
    status: "processing",
    email: "william61@gmail.com",
    date: "2024-11-11T11:30:00Z",
    method: "bank_transfer",
    currency: "USD",
    transactionId: "TX369852147",
  },
  {
    id: "m6q7r8s9",
    amount: 745,
    status: "success",
    email: "lucy32@hotmail.com",
    date: "2024-11-10T08:50:00Z",
    method: "credit_card",
    currency: "USD",
    transactionId: "TX741963852",
  },
  {
    id: "n8r9s0t1",
    amount: 524,
    status: "failed",
    email: "aiden22@gmail.com",
    date: "2024-11-09T12:00:00Z",
    method: "paypal",
    currency: "USD",
    transactionId: "TX852369741",
  },
  {
    id: "o2s3t4u5",
    amount: 890,
    status: "success",
    email: "ella28@outlook.com",
    date: "2024-11-08T14:40:00Z",
    method: "bank_transfer",
    currency: "USD",
    transactionId: "TX159753468",
  },
  {
    id: "p7u8v9w1",
    amount: 400,
    status: "processing",
    email: "liam75@yahoo.com",
    date: "2024-11-07T15:30:00Z",
    method: "paypal",
    currency: "USD",
    transactionId: "TX753159468",
  },
  {
    id: "q2v3w4x5",
    amount: 634,
    status: "pending",
    email: "evelyn99@gmail.com",
    date: "2024-11-06T13:50:00Z",
    method: "credit_card",
    currency: "USD",
    transactionId: "TX987654123",
  },
];

export const columns: ColumnDef<Payment>[] = [
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
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <div>{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      return <div>{date.toLocaleDateString()}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <AreaChartInteractive />
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
