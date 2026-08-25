"use client";

export default function SearchBar({
  searchTerm,
  onSearchTermChange,
  selectedCategory,
  onSelectedCategoryChange,
  categories,
}) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:px-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchTermChange(event.target.value)}
        placeholder="Search products..."
        className="w-full flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-gray-500 focus:outline-none"
      />
      <select
        value={selectedCategory}
        onChange={(event) => onSelectedCategoryChange(event.target.value)}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-gray-500 focus:outline-none sm:w-56"
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
