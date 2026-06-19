"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl font-bold text-gray-900">Your Cart</h2>
        <p className="mt-4 text-gray-600">Your cart is currently empty.</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="font-headline text-3xl font-bold text-gray-900">Your Cart</h2>

      <div className="mt-8 space-y-6">
        {cartItems.map((item) => {
          const imageUrl = item.images[0];
          const itemName = item.title;
          return (
          <div
            key={item.id}
            className="grid grid-cols-[96px_1fr] gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:grid-cols-[120px_1fr_auto]"
          >
            <img
              src={imageUrl}
              alt={itemName}
              className="h-24 w-24 rounded-lg object-cover sm:h-28 sm:w-28"
            />

            <div>
              <h2 className="font-semibold text-gray-900">{itemName}</h2>
              <p className="mt-1 text-blue-600">
                ${item.price}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg font-bold hover:bg-gray-100"
                >
                  -
                </button>

                <span className="min-w-8 text-center font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white hover:bg-blue-700"
                >
                  +
                </button>
              </div>
            </div>

            <div className="col-span-2 text-left sm:col-span-1 sm:text-right">
              <p className="font-semibold text-gray-900">
                ${(item.price * item.quantity)}
              </p>
            </div>
          </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between text-lg font-bold">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>

        <div className="mt-6">
          <Link
            href="/checkout"
            className="block w-full rounded-lg bg-green-600 px-4 py-3 text-center font-bold text-white hover:bg-green-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}