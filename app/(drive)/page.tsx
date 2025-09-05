"use client";

import { useState, useEffect } from "react";
import { filesData } from "@/lib/data";
import { FileAccess } from "@/components/ui/FileAccess";
import { EmptyState } from "@/components/ui/EmptyState";
import { useView } from "@/context/ViewContext";

export default function BerandaPage() {
  const { viewMode } = useView();
  const [isLoading, setIsLoading] = useState(true);
  const hasFiles = filesData.length > 0;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Beranda</h1>
      
      {/* Pastikan tidak ada <Header /> di sini */}
      
      <div className="mt-8"> {/* Memberi jarak dari judul ke konten */}
        {isLoading ? (
            <FileAccess viewMode={viewMode} isLoading={true} />
        ) : hasFiles ? (
            <FileAccess viewMode={viewMode} isLoading={false} />
        ) : (
            <EmptyState />
        )}
      </div>
    </>
  );
}