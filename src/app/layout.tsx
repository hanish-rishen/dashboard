// components/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image'; // Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyDashboard",
  description: "A Dashboard for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={cn("min-h-screen w-full bg-white text-black flex flex-col", inter.className)} style={{ zoom: '80%' }}>
        <div className="flex-1 w-full">
          <header className="flex items-center px-4 md:px-8 py-3 md:py-4 border-b text-2xl md:text-4xl font-bold w-full">
            {/* Replace img with Image */}
            <Image src="/images/logo.jpeg" alt="Logo" width={48} height={48} className="w-12 h-12 md:w-16 md:h-16" />
            <span className="pl-2 pr-2 md:pl-4 mt-1 md:mt-3 flex-grow">MyDashboard</span>
            <div className="ml-auto">
              <Badge className="p-2 md:p-4" variant="outline">
                <Avatar>
                  {/* Replace img with Image */}
                  <AvatarImage src="https://github.com/shadcn.png" width={48} height={48} />
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
