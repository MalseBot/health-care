import type { Metadata } from "next";
import "./globals.css";
import { Navbar1 } from "@/components/ui/navbar1";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Dentist",
  description: "where your teeth gets the care it deserve",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-background text-text antialiased`}
        >
        <Navbar1 />
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
