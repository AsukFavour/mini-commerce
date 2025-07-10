import { ReactNode } from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Providers from "./providers";

export const metadata = {
  title: "Mini-Commerce",
  description: "A tiny e-commerce shop built with Next.js, Zustand, and React Query",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen flex flex-col">
        <Providers>
          <Header />
          
              {children}
            
          <Footer />
        </Providers>
      </body>
    </html>
  );
}