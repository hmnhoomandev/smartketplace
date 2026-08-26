"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { categoryTree } from "@/data/categories";

export default function CategoryMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative shrink-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-light hover:text-brand"
      >
        Catégories
        <span aria-hidden="true">▾</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 z-20 mt-1 w-[min(90vw,48rem)] rounded-md border border-gray-200 bg-white p-4 shadow-lg">
          <div className="grid max-h-[70vh] grid-cols-2 gap-x-6 gap-y-4 overflow-y-auto sm:grid-cols-3 lg:grid-cols-4">
            {categoryTree.map((category) => (
              <div key={category.name}>
                <Link
                  href={`/?category=${encodeURIComponent(category.name)}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-gray-900 hover:text-brand"
                >
                  {category.name}
                </Link>
                {category.subs.length > 0 && (
                  <ul className="mt-1 space-y-1">
                    {category.subs.map((sub) => (
                      <li key={sub}>
                        <Link
                          href={`/?category=${encodeURIComponent(sub)}`}
                          onClick={() => setIsOpen(false)}
                          className="text-sm text-gray-500 hover:text-brand"
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
