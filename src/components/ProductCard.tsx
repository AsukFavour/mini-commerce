"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "../types/product";
import { useCart } from "../store/cart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCart((state) => state.addToCart);
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col cursor-pointer group"
      onClick={() => router.push(`/product/${product.slug}`)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") router.push(`/product/${product.slug}`);
      }}
    >
      <div className="relative w-full aspect-square mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain rounded-xl bg-gray-50"
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={false}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-1 group-hover:text-primary transition">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-lg text-gray-900">${product.price}</span>
        </div>
        <button
          className="mt-auto bg-black text-white rounded-full px-4 py-2 font-medium hover:bg-gray-900 transition"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, 1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}