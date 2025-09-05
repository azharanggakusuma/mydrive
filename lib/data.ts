import { File, Folder } from "lucide-react";

export const filesData = [
  { name: "Proposal Proyek Q4.pdf", type: "file" as const, size: "2.1 MB", modified: "Kemarin" },
  { name: "Aset Desain", type: "folder" as const, size: "128 MB", modified: "2 hari lalu" },
  { name: "Foto Event 2025", type: "folder" as const, size: "3.2 GB", modified: "5 Sep 2025" },
  { name: "Laporan Bulanan.xlsx", type: "file" as const, size: "850 KB", modified: "28 Agu 2025" },
];

export type FileItem = typeof filesData[0];