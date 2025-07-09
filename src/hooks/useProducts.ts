import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/product";

// Fetch products from localStorage or public/products.json
const fetchProducts = async (): Promise<Product[]> => {
  // Try to get from localStorage first
  const local = typeof window !== "undefined" ? localStorage.getItem("products") : null;
  if (local) {
    return JSON.parse(local);
  }
  // Otherwise, fetch from public/products.json and seed localStorage
  const res = await fetch("/products.json");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  if (typeof window !== "undefined") {
    localStorage.setItem("products", JSON.stringify(data));
  }
  return data;
};

export function useProducts() {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
  });
}