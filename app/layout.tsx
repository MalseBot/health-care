import type { Metadata } from "next";
import "./globals.css";

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
        className={` bg-BG antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
