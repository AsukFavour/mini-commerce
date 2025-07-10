"use client";
import CartItem from "../../components/CartItem";
import CartSummary from "../../components/CartSummary";
import { useCart } from "../../store/cart";


export default function CartPage() {
  const items = useCart((state) => state.items);

  return (
    
      
    <div className="max-w-6xl mx-auto px-2 md:px-0 py-10 md:py-16">
      {/* Breadcrumbs */}
      <div className="text-xs md:text-sm text-gray-400 mb-4">
        <span className="hover:underline cursor-pointer" onClick={() => window.location.href = "/"}>Home</span> &gt;{" "}
        <span className="text-black font-medium">Cart</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-extrabold mb-8 md:mb-12">YOUR CART</h1>
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Cart Items */}
        <div className="flex-1 bg-white rounded-2xl p-4 md:p-6 shadow-sm md:min-w-[350px]">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-20">Your cart is empty.</div>
          ) : (
            <div className="flex flex-col divide-y">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
        {/* Cart Summary */}
        <div className="w-full md:w-[350px] min-w-[320px] flex-shrink-0">
          <CartSummary />
        </div>
      </div>
    </div>
    
  );
}
