import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

type CartItem = Product & { quantity: number };

interface CartState {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: () => number;
  totalItems: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product, quantity = 1) => {
        const items = get().items;
        const existing = items.find((item) => item.id === product.id);
        if (existing) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity }] });
        }
      },
      removeFromCart: (id) =>
        set({ items: get().items.filter((item) => item.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }),
      clearCart: () => set({ items: [] }),
      subtotal: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      totalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    { name: "cart-storage" }
  )
);