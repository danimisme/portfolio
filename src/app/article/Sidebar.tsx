// components/Layout/Sidebar.tsx
"use client";

import { useState } from "react";
import { ArticleMeta } from "@/types/Article";
import ArticleList from "@/app/article/ArticleList";
import { Menu, X } from "lucide-react";

interface SidebarProps {
  articles: ArticleMeta[];
}

export default function Sidebar({ articles }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Tombol toggle di mobile */}
      
        {!isOpen && (
          <button
        onClick={() => setIsOpen(!isOpen)}
        className=" fixed top-16 left-4 z-30 bg-gray-200 dark:bg-darkgray p-2 rounded shadow dark:border dark:border-gray-300"
      >
          <div className="flex items-center gap-2 font-poppins">
            <Menu size={20} className="dark:text-gray-300"/> <span className="font-poppins text-sm dark:text-gray-300">List Artikel</span>
          </div>
      </button>
        )}

      {/* Sidebar */}
      <aside
        className={`
          font-poppins text-sm h-full md:h-auto sm:pt-16 md:pt-0 px-4 w-64 bg-gray-100 dark:bg-darkgray border-r dark:border-gray-600
          fixed top-0 left-0 z-20 transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
           md:relative md:z-0 ${isOpen ? "md:w-64" : "md:w-0"}
        `}
      >
        <div className={`mt-4 md:mt-8 lg:mt-12 sticky top-16 ${isOpen ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold dark:text-white">List Artikel</h2>
            {isOpen && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-200 dark:bg-darkgray p-1 rounded-lg shadow dark:border dark:border-gray-300"
              >
                <X size={20} className="dark:text-gray-300" />
              </button>
            )}
          </div>
          <ArticleList articles={articles} />
        </div>
      </aside>
    </>
  );
}
