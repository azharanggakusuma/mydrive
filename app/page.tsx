"use client";

import { useState, useEffect } from "react";
import { filesData } from "@/lib/data";
import { Header } from "@/components/ui/Header";
import { Sidebar } from "@/components/ui/Sidebar";
import { FileAccess } from "@/components/ui/FileAccess";
import { EmptyState } from "@/components/ui/EmptyState";

export default function DrivePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true); // <-- State loading baru
  const hasFiles = filesData.length > 0;

  // Simulasi fetching data saat komponen pertama kali dimuat
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // <-- Tampilkan skeleton selama 1.5 detik

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

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

      {/* Konten Utama */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Beranda</h1>
        
        <Header onMenuClick={toggleSidebar} viewMode={viewMode} onViewChange={setViewMode} />
        
        {isLoading ? (
            <FileAccess viewMode={viewMode} isLoading={true} />
        ) : hasFiles ? (
            <FileAccess viewMode={viewMode} isLoading={false} />
        ) : (
            <EmptyState />
        )}

      </main>
    </div>
  );
}