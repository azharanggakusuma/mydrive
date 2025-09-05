"use client";

import { useState, useEffect } from "react";
import { filesData } from "@/lib/data";
import { Header } from "@/components/ui/Header";
import { FileAccess } from "@/components/ui/FileAccess";
import { EmptyState } from "@/components/ui/EmptyState";

// Note: onMenuClick sekarang dikelola oleh DriveLayout
// jadi kita akan menghapusnya dari props Header di sini.
// Kita akan menyesuaikan Header untuk menerima props opsional.

export default function BerandaPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const hasFiles = filesData.length > 0;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Beranda</h1>
      
      {/* @ts-ignore */}
      <Header viewMode={viewMode} onViewChange={setViewMode} />
      
      {isLoading ? (
          <FileAccess viewMode={viewMode} isLoading={true} />
      ) : hasFiles ? (
          <FileAccess viewMode={viewMode} isLoading={false} />
      ) : (
          <EmptyState />
      )}
    </>
  );
}