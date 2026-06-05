"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart, removeFromCart, getProductQuantity } = useCart();
  const quantity = getProductQuantity(product.id);

   if (quantity === 0) {
    return (
      <button
        onClick={() => addToCart(product)}
        className="cursor-pointer font-body flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.98] sm:w-auto sm:min-w-[200px]"
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="flex w-full items-center gap-3 sm:w-auto">
      <button 
        onClick={() => removeFromCart(product.id)}
        className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 text-xl font-semibold text-gray-900 transition hover:bg-gray-100 active:scale-[0.98]"
      >
        -
      </button>

      <div className="flex h-12 min-w-16 items-center justify-center rounded-xl bg-gray-100 px-5 text-base font-semibold text-gray-900">
        {quantity}
      </div>

      <button
        onClick={() => addToCart(product)}
        className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-xl font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
      >
        +
      </button>
    </div>
  );
}