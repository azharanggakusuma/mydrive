import {
  Home,
  Folder,
  Users,
  Clock,
  Star,
  Trash2,
  Settings,
  HardDrive,
} from "lucide-react";

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

const StorageStatus = () => (
    <div className="mt-8 px-4 pt-4 pb-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
            <HardDrive size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-sm">Penyimpanan</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "45%" }}></div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">9 GB dari 20 GB digunakan</p>
    </div>
);

export const Sidebar = () => (
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
            <StorageStatus />
        </div>
        <div>
            <NavItem icon={<Settings size={20} />} label="Pengaturan" />
        </div>
    </div>
);