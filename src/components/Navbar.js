"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { totalQuantity } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setIsLoggedIn(document.cookie.includes("auth_token"));
  }, [pathname]);

  const handleLogout = () => {
    document.cookie = "auth_token=; path=/; max-age=0;"; // to delete the cookie
    setIsLoggedIn(false);
    router.push("/");
    router.refresh(); 
  };

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
          <div className="border-l border-gray-300 pl-8 flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center gap-6">
                <Link href="/admin" className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="font-semibold text-red-600 hover:text-red-700 transition-colors">
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}