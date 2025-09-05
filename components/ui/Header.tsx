import {
  Menu,
  Search,
  LayoutGrid,
  List,
  UserCircle2,
} from "lucide-react";

export type HeaderProps = {
  onMenuClick: () => void;
  viewMode: 'grid' | 'list';
  onViewChange: (mode: 'grid' | 'list') => void;
};

export const Header = ({ onMenuClick, viewMode, onViewChange }: HeaderProps) => (
  <header className="flex justify-between items-center mb-8 w-full gap-4">
    <div className="flex items-center gap-4 flex-1">
      <button onClick={onMenuClick} className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle Menu">
        <Menu size={24} />
      </button>
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input type="text" placeholder="Cari di Drive..." className="w-full pl-11 pr-4 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md" />
      </div>
    </div>
    <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center bg-gray-200 dark:bg-gray-800 p-1 rounded-full">
            <button onClick={() => onViewChange('grid')} className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}>
                <LayoutGrid size={20} />
            </button>
            <button onClick={() => onViewChange('list')} className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}>
                <List size={20} />
            </button>
        </div>
        <UserCircle2 size={40} className="text-gray-500 cursor-pointer" />
    </div>
  </header>
);