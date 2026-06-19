"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault(); 
    setIsProcessing(true);

    setTimeout(() => {
      clearCart(); 
      setIsProcessing(false);
      setOrderComplete(true); 
    }, 1500);
  };
  
  if (orderComplete) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-12 shadow-sm">
          <h1 className="text-4xl font-bold text-green-700">Order Confirmed! 🎉</h1>
          <p className="mt-4 text-lg text-green-800">Thank you for your purchase. Your items will be shipped soon.</p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty!</h2>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">Go back to store</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">First Name</label>
                <input type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                <input type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Address</label>
              <input type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Credit Card Number</label>
              <input type="text" placeholder="1234 5678 9101 1121" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
          </form>
        </div>
        
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.title} (x{item.quantity})</span>
                <span className="font-medium text-gray-900">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>

          <button
            type="submit"
            form="checkout-form"
            disabled={isProcessing}
            className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
    </section>
  );
}