"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import MembersSection from "@/components/MembersSection";
import { categories, categoryTree } from "@/data/categories";
import { members } from "@/data/members";

function productMatchesCategory(productCategory, selectedCategory) {
  if (productCategory === selectedCategory) return true;
  const parent = categoryTree.find(
    (category) => category.name === selectedCategory
  );
  return parent ? parent.subs.includes(productCategory) : false;
}

function HomeContentInner({ products }) {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        !selectedCategory ||
        productMatchesCategory(product.category, selectedCategory);
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Hero
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onSelectedCategoryChange={setSelectedCategory}
        categories={categories}
      />
      <ProductGrid products={filteredProducts} />
      <MembersSection members={members} />
    </div>
  );
}

export default function HomeContent({ products }) {
  return (
    <Suspense fallback={null}>
      <HomeContentInner products={products} />
    </Suspense>
  );
}
