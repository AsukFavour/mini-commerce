"use client";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Failed to load products.</div>;

  return (
   <section className=" mb-3 mx-10 px-0 pt-0">
    <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Our Products</h2>
    <p className="text-gray-600 mb-8">
      Explore our curated collection of fashion essentials. From classic tees to trendy jackets, we have something for everyone.
    </p>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="catalogue">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
 </section>
  );
}