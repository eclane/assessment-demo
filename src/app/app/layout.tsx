"use client";

import LoadingComponent from "@/components/loading";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import HeaderComponent from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") router.push("/");
  }, [status, router]);

  if (status === "loading") {
    return <LoadingComponent />;
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent signOut={signOut} useSession={useSession} />

        {children}
      </body>
    </html>
  );
}
