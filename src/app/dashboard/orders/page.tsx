"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

// Mock orders data
const mockOrders = [
  {
    id: 1,
    orderNumber: "ORD-001",
    customer: "João Silva",
    date: "2024-02-10",
    total: 250.00,
    status: "completed",
    items: 3,
  },
  {
    id: 2,
    orderNumber: "ORD-002",
    customer: "Maria Santos",
    date: "2024-02-09",
    total: 180.50,
    status: "processing",
    items: 2,
  },
  {
    id: 3,
    orderNumber: "ORD-003",
    customer: "Pedro Oliveira",
    date: "2024-02-08",
    total: 420.00,
    status: "completed",
    items: 5,
  },
  {
    id: 4,
    orderNumber: "ORD-004",
    customer: "Ana Costa",
    date: "2024-02-08",
    total: 95.00,
    status: "pending",
    items: 1,
  },
  {
    id: 5,
    orderNumber: "ORD-005",
    customer: "Carlos Ferreira",
    date: "2024-02-07",
    total: 310.75,
    status: "completed",
    items: 4,
  },
];

const statusColors = {
  completed: "bg-green-500",
  processing: "bg-blue-500",
  pending: "bg-yellow-500",
  cancelled: "bg-red-500",
};

export default function OrdersPage() {
  const [orders] = useState(mockOrders);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            View and manage all orders
          </p>
        </div>
        <Link href="/dashboard/orders/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Order
          </Button>
        </Link>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Order List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Order #
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Date
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">
                    Items
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                    Total
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-4 py-4 font-medium">{order.orderNumber}</td>
                    <td className="px-4 py-4">{order.customer}</td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 text-center text-sm">
                      {order.items}
                    </td>
                    <td className="px-4 py-4 text-right font-medium">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-4 py-4">
                      <Badge
                        className={`${
                          statusColors[order.status as keyof typeof statusColors]
                        } text-white`}
                      >
                        {order.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
