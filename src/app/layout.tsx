import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mais Sabor Seller Dashboard",
  description: "Dashboard for managing WooCommerce orders and sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
