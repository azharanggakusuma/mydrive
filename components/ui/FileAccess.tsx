import { File, Folder } from "lucide-react";
import { filesData, type FileItem } from "@/lib/data";

const FileCard = ({ name, type, size }: FileItem) => (
  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
    <div className="flex items-center gap-4 mb-3">
      {type === "folder" ? <Folder className="text-blue-500 group-hover:text-blue-600" size={28} /> : <File className="text-gray-400 group-hover:text-gray-500" size={28} />}
      <span className="font-semibold text-gray-800 dark:text-gray-200 truncate">{name}</span>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400 pl-11">{size}</p>
  </div>
);

const FileRow = ({ name, type, size, modified }: FileItem) => (
    <div className="grid grid-cols-12 gap-4 items-center px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
        <div className="col-span-6 flex items-center gap-4">
            {type === "folder" ? <Folder className="text-blue-500" size={20} /> : <File className="text-gray-400" size={20} />}
            <span className="font-medium truncate">{name}</span>
        </div>
        <div className="col-span-3 text-sm text-gray-500 dark:text-gray-400">{modified}</div>
        <div className="col-span-3 text-sm text-gray-500 dark:text-gray-400">{size}</div>
    </div>
);

export const FileAccess = ({ viewMode }: { viewMode: 'grid' | 'list' }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Akses Cepat</h2>
    {viewMode === 'grid' ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {filesData.map((file, index) => <FileCard key={index} {...file} />)}
      </div>
    ) : (
      <div className="bg-white dark:bg-gray-800/50 p-2 rounded-lg">
          <div className="grid grid-cols-12 gap-4 px-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="col-span-6 text-sm font-semibold text-gray-600 dark:text-gray-400">Nama</div>
              <div className="col-span-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Terakhir diubah</div>
              <div className="col-span-3 text-sm font-semibold text-gray-600 dark:text-gray-400">Ukuran file</div>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            {filesData.map((file, index) => <FileRow key={index} {...file} />)}
          </div>
      </div>
    )}
  </div>
);