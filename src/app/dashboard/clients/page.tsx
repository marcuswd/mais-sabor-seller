"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock client data
const mockClients = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@example.com",
    phone: "(11) 98765-4321",
    totalOrders: 15,
    totalSpent: 4500,
    lastOrder: "2024-02-05",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria.santos@example.com",
    phone: "(11) 97654-3210",
    totalOrders: 23,
    totalSpent: 6800,
    lastOrder: "2024-02-08",
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    email: "pedro.oliveira@example.com",
    phone: "(11) 96543-2109",
    totalOrders: 8,
    totalSpent: 2100,
    lastOrder: "2024-02-03",
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana.costa@example.com",
    phone: "(11) 95432-1098",
    totalOrders: 31,
    totalSpent: 9200,
    lastOrder: "2024-02-09",
  },
  {
    id: 5,
    name: "Carlos Ferreira",
    email: "carlos.ferreira@example.com",
    phone: "(11) 94321-0987",
    totalOrders: 12,
    totalSpent: 3600,
    lastOrder: "2024-02-07",
  },
];

export default function ClientsPage() {
  const [clients, setClients] = useState(mockClients);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // In a real app, fetch from WooCommerce API
    const filtered = mockClients.filter(
      (client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setClients(filtered);
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
        <p className="text-muted-foreground">
          Manage and view your customer information
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search clients by name or email..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Phone
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                    Orders
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                    Total Spent
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Last Order
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr
                    key={client.id}
                    className="border-b hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-4 py-4 font-medium">{client.name}</td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      {client.email}
                    </td>
                    <td className="px-4 py-4 text-sm">{client.phone}</td>
                    <td className="px-4 py-4 text-right text-sm">
                      {client.totalOrders}
                    </td>
                    <td className="px-4 py-4 text-right text-sm font-medium">
                      ${client.totalSpent.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      {new Date(client.lastOrder).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {clients.length === 0 && (
              <div className="py-8 text-center text-muted-foreground">
                No clients found
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
