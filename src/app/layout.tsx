// components/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhatBytes",
  description: "Assignment for WhatBytes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={cn("min-h-screen w-full bg-white text-black flex flex-col", inter.className)}>
        <div className="flex-1 w-full">
          <header className="flex items-center px-4 md:px-8 py-3 md:py-4 border-b text-2xl md:text-4xl font-bold w-full">
            <img className="w-12 h-12 md:w-16 md:h-16" alt="Logo" src="/images/logo.jpeg" />
            <span className="pl-2 pr-2 md:pl-4 mt-1 md:mt-3 flex-grow">WhatBytes</span>
            <div className="ml-auto">
              <Badge className="p-2 md:p-4" variant="outline">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="ml-2 md:ml-3 text-sm md:text-lg">Hanish Rishen</span>
              </Badge>
            </div>
          </header>
          <div className="flex flex-1 w-full">
            <Sidebar/> {/* Assuming Sidebar takes 25% width on small screens and 20% on medium screens */}
            <main className="flex-1 p-4 md:p-8 pt-12 md:pt-16">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
