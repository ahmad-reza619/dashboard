import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/layouts/sidebar";
import Header from "@/components/layouts/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-100">
          <main className="grid md:grid-cols-[300px_1fr]">
            <Sidebar />
            <section>
              <Header />
              <div className="p-4">{children}</div>
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
