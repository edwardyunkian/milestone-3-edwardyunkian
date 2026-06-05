"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalQuantity } = useCart();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-indigo-600">
          Revo<span className="text-indigo-600">Shop</span>
        </Link>
        <nav className="flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/" className="transition-colors hover:text-gray-900">
              Home
          </Link>
            <Link href="/about" className="hover:transition-colors hover:text-gray-900">
              About
            </Link>
            <Link href="/faq" className="hover:transition-colors hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/cart" className="hover:transition-colors hover:text-gray-900">
              Cart ({totalQuantity})
          </Link>
        </nav>
      </div>
    </header>
  );
}