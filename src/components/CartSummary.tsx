"use client";
import { useCart } from "../store/cart";
import { useState } from "react";
import { FiTag } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function CartSummary() {
  const subtotal = useCart((state) => state.subtotal());
  // For demo, let's say promo code always gives $113 off if applied
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState(false);
  const discount = applied ? 113 : 0;
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-6 max-w-md w-full">
      <div className="flex justify-between items-center text-lg font-semibold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center text-lg font-semibold text-red-500">
        <span>Discount</span>
        <span>- ${discount}</span>
      </div>
      <div className="border-t pt-4 flex justify-between items-center text-xl font-bold">
        <span>Total</span>
        <span>${(subtotal - discount).toFixed(2)}</span>
      </div>
      {/* Promo code input */}
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 flex-1">
          <FiTag className="text-gray-400 mr-2" />
          <input
            type="text"
            className="bg-transparent outline-none flex-1 text-base"
            placeholder="Add promo code"
            value={promo}
            onChange={e => setPromo(e.target.value)}
            disabled={applied}
          />
        </div>
        <button
          className="ml-2 text-black font-semibold"
          disabled={applied || !promo}
          onClick={() => setApplied(true)}
        >
          Apply
        </button>
      </div>
      {/* Checkout button */}
      <button
        className="w-full bg-black text-white rounded-full py-3 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition mt-2"
        onClick={() => router.push("/checkout")}
      >
        Go to Checkout <span className="ml-2 text-xl">→</span>
      </button>
    </div>
  );
}
