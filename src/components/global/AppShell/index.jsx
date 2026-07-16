"use client";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import { usePathname } from "next/navigation";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      <main className={isAdmin ? "min-h-screen" : "pt-12 min-h-screen"}>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
