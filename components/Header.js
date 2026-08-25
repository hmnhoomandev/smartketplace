"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/products";

export default function Header() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-gray-900">
          SmartketPlace
        </Link>

        <nav className="relative">
          <button
            type="button"
            onClick={() => setIsCategoriesOpen((open) => !open)}
            className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Categories
            <span aria-hidden="true">▾</span>
          </button>

          {isCategoriesOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/?category=${encodeURIComponent(category)}`}
                  onClick={() => setIsCategoriesOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
