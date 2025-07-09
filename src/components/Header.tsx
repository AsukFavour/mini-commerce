"use client";
import { useState } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-gray-900">Mini-Commerce</span>
        </div>

        {/* Search Bar */}
        <form
          className="flex-1 mx-4 max-w-xl"
          onSubmit={e => {
            e.preventDefault();
            // handle search logic here
          }}
        >
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch size={20} />
            </span>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"
              placeholder="Search for products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </form>

        {/* Cart Icon */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="View cart"
          >
            <FiShoppingCart size={22} className="text-gray-700" />
            {/* Example cart badge */}
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}