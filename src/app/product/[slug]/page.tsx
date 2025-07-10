"use client";
import { useParams, useRouter } from "next/navigation";
import { useProducts } from "../../../hooks/useProducts";
import Image from "next/image";
import { useCart } from "../../../store/cart";
import { useState } from "react";


export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const { data: products, isLoading, error } = useProducts();
  const addToCart = useCart((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <div className="py-20 text-center">Loading...</div>;
  if (error) return <div className="py-20 text-center">Failed to load product.</div>;

  const product = products?.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-20 text-center">
        Product not found.
        <button className="ml-4 underline" onClick={() => router.back()}>
          Go Back
        </button>
      </div>
    );
  }

  return (

    
     
    <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto py-10">
      {/* Product Image */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-2xl p-6 min-h-[350px]">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="object-contain rounded-xl"
          priority
        />
      </div>
      {/* Product Details */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-gray-600 text-base mb-4">{product.description}</p>
          <div className="text-2xl font-bold text-black mb-2">${product.price}</div>
        </div>
        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center border rounded-full px-2 py-1 bg-gray-100">
            <button
              className="px-3 py-1 text-lg font-bold text-gray-700 hover:text-black focus:outline-none"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              –
            </button>
            <span className="px-4 text-base font-semibold">{quantity}</span>
            <button
              className="px-3 py-1 text-lg font-bold text-gray-700 hover:text-black focus:outline-none"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            className="flex-1 bg-black text-white rounded-full px-8 py-3 font-semibold hover:bg-gray-900 transition text-center"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
        <button
          className="underline text-gray-500 mt-2 w-fit"
          onClick={() => router.back()}
        >
          Back to Catalogue
        </button>
      </div>
    </div> 
    
  );
}