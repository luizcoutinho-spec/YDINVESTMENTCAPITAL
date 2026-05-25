import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YD Investment Capital",
  description: "Strategic finance, capital intelligence, and operational advisory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
