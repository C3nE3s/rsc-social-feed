import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSuite Social",
  description: "A Social Feed built with RSC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
