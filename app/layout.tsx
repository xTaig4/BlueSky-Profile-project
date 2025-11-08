import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profile",
  description: "View details about the profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
