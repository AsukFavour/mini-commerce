"use client";
import { useRouter } from "next/navigation";


export default function CheckoutPage() {
  const router = useRouter();

  return (
    
      
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">🎉 Thank You for Shopping! 🎉</h1>
      <p className="text-lg text-gray-600 mb-6">
        Your order is on its way!<br />
        If you don&apos;t receive it, it&apos;s probably because our delivery drone stopped for a coffee break. ☕️
      </p>
      <button
        className="bg-black text-white px-8 py-3 rounded-full font-semibold
        hover:bg-gray-800 transition-all duration-300"
        onClick={() => router.push("/")}
      >
        Back to Home
      </button>
    </div>
   
  );
}