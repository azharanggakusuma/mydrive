"use client";

import { useState } from "react";
import {
  File,
  Folder,
  Home,
  Plus,
  Search,
  Settings,
  Star,
  Trash2,
  Users,
  Clock,
  UserCircle2,
  Menu,
} from "lucide-react";

// ============================================================================
// KOMPONEN-KOMPONEN LOKAL
// Semua komponen didefinisikan di sini untuk menghindari error impor
// ============================================================================

// --- Komponen Sidebar ---
type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
};

const NavItem = ({ icon, label, isActive = false }: NavItemProps) => {
  const activeClasses = isActive
    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold"
    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800";
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ease-in-out ${activeClasses}`}>
      {icon}
      <span className="truncate">{label}</span>
    </a>
  );
};

const SidebarContent = () => (
    <div className="w-64 h-full bg-white dark:bg-gray-900/50 p-6 flex flex-col justify-between border-r border-gray-200 dark:border-gray-800">
        <div>
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-12">MyDrive</h1>
            <nav className="flex flex-col gap-2">
                <NavItem icon={<Home size={20} />} label="Beranda" isActive />
                <NavItem icon={<Folder size={20} />} label="File Saya" />
                <NavItem icon={<Users size={20} />} label="Dibagikan" />
                <NavItem icon={<Clock size={20} />} label="Terbaru" />
                <NavItem icon={<Star size={20} />} label="Berbintang" />
                <NavItem icon={<Trash2 size={20} />} label="Sampah" />
            </nav>
        </div>
        <div>
            <NavItem icon={<Settings size={20} />} label="Pengaturan" />
        </div>
    </div>
);


// --- Komponen Header ---
type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => (
  <header className="flex justify-between items-center mb-8 w-full">
    <div className="flex items-center gap-4">
      <button onClick={onMenuClick} className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle Menu">
        <Menu size={24} />
      </button>
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input type="text" placeholder="Cari di Drive..." className="w-full pl-11 pr-4 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md" />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
        <Plus size={20} /> Tambah Baru
      </button>
      <UserCircle2 size={40} className="text-gray-500 cursor-pointer" />
    </div>
  </header>
);

// --- Komponen WelcomeBanner ---
const WelcomeBanner = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900/50 rounded-xl p-8 mb-8 relative overflow-hidden">
    <div className="z-10 relative">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Selamat Datang Kembali!</h1>
        <p className="text-gray-600 dark:text-blue-100 mt-2">Semua file Anda aman dan terorganisir.</p>
    </div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-30"></div>
  </div>
);

// --- Komponen FileGrid ---
const filesData = [
  { name: "Proposal Proyek Q4.pdf", type: "file" as const, size: "2.1 MB" },
  { name: "Aset Desain", type: "folder" as const, size: "128 MB" },
  { name: "Foto Event 2025", type: "folder" as const, size: "3.2 GB" },
  { name: "Laporan Bulanan.xlsx", type: "file" as const, size: "850 KB" },
];

type FileCardProps = { name: string; type: "file" | "folder"; size: string; };

const FileCard = ({ name, type, size }: FileCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
    <div className="flex items-center gap-4 mb-3">
      {type === "folder" 
        ? <Folder className="text-blue-500 group-hover:text-blue-600 transition-colors" size={28} strokeWidth={1.5} /> 
        : <File className="text-gray-400 group-hover:text-gray-500 transition-colors" size={28} strokeWidth={1.5} />}
      <span className="font-semibold text-gray-800 dark:text-gray-200 truncate">{name}</span>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400 pl-11">{size}</p>
  </div>
);

const FileGrid = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Akses Cepat</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {filesData.map((file, index) => <FileCard key={index} {...file} />)}
    </div>
  </div>
);

// --- Komponen EmptyState ---
const EmptyState = () => (
  <div className="text-center py-16 px-8 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
    <Folder size={64} className="mx-auto text-gray-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2">Tidak Ada File</h3>
    <p className="text-gray-500 mb-6">Mulai unggah file pertama Anda untuk melihatnya di sini.</p>
    <button className="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold">
      <Plus size={20} /> Unggah File
    </button>
  </div>
);


// ============================================================================
// KOMPONEN HALAMAN UTAMA
// ============================================================================

export default function DrivePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const hasFiles = filesData.length > 0;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-full bg-gray-100 dark:bg-black overflow-hidden">
      {/* Sidebar Desktop */}
      <div className="hidden lg:block flex-shrink-0">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={toggleSidebar}></div>}

      {/* Mobile Sidebar Content */}
      <div className={`fixed top-0 left-0 h-full z-30 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
        <SidebarContent />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col overflow-y-auto">
        <Header onMenuClick={toggleSidebar} />
        <WelcomeBanner />
        {hasFiles ? <FileGrid /> : <EmptyState />}
      </main>
    </div>
  );
}