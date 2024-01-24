import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/session";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assessment Test",
  description: "Built for ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <NextTopLoader color="#ed6818" />
        <Toaster richColors position="top-center" />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
