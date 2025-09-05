"use client";

import { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";

export default function DriveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen w-full bg-gray-100 dark:bg-black overflow-hidden">
      {/* Sidebar untuk Desktop */}
      <div className="hidden lg:block flex-shrink-0">
        <Sidebar />
      </div>

      {/* Sidebar untuk Mobile */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={toggleSidebar}></div>}
      <div className={`fixed top-0 left-0 h-full z-30 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
        <Sidebar />
      </div>

      {/* Konten Utama dari setiap halaman akan dirender di sini */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col overflow-y-auto">
        {children}
      </main>
    </div>
  );
}