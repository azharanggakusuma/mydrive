"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { filesData } from "@/lib/data";
import { Header } from "@/components/ui/Header";
import { Sidebar } from "@/components/ui/Sidebar";
import { FileAccess } from "@/components/ui/FileAccess";
import { EmptyState } from "@/components/ui/EmptyState";

export default function DrivePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const hasFiles = filesData.length > 0;

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
        <div className="flex items-center justify-between mb-8 w-full">
            <h1 className="text-3xl font-bold">Beranda</h1>
            <button className="flex sm:hidden items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold">
                <Plus size={20} />
            </button>
        </div>
        <Header onMenuClick={toggleSidebar} viewMode={viewMode} onViewChange={setViewMode} />
        {hasFiles ? <FileAccess viewMode={viewMode} /> : <EmptyState />}
      </main>
    </div>
  );
}