import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        className={` bg-bg antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
