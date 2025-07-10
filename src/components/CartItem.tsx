"use client";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../store/cart";
import { Product } from "../types/product";

interface CartItemProps {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: CartItemProps) {
  const removeFromCart = useCart((state) => state.removeFromCart);
  const updateQuantity = useCart((state) => state.updateQuantity);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 py-4 border-b last:border-b-0">
      {/* Product Image */}
      <div className="w-full md:w-28 h-28 flex-shrink-0 rounded-xl bg-gray-50 flex items-center justify-center">
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          className="object-contain rounded-lg"
        />
      </div>
      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
        <div className="font-semibold text-lg text-gray-900">{item.name}</div>
        <div className="text-gray-500 text-sm">${item.price} each</div>
      </div>
      {/* Remove Button */}
      <button
        className="text-red-500 hover:text-red-700 p-2"
        aria-label="Remove from cart"
        onClick={() => removeFromCart(item.id)}
      >
        <FiTrash2 size={22} />
      </button>
      {/* Quantity Controls */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 min-w-[110px] justify-between">
        <button
          className="text-lg font-bold text-gray-700 hover:text-black"
          aria-label="Decrease quantity"
          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
        >
          –
        </button>
        <span className="px-3 text-base font-semibold">{item.quantity}</span>
        <button
          className="text-lg font-bold text-gray-700 hover:text-black"
          aria-label="Increase quantity"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
