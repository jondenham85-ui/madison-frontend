import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  // Dynamic ShopMAD Store Loader
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/shopmad/products");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.log("ShopMAD backend not ready yet, using fallback.");
      }
    }
    loadProducts();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white text-black">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Cash App Pay Buttons */}
      <section className="w-full flex flex-col items-center gap-4 mt-10">
        <a
          href="https://cash.app/$MadMadisonAI/10"
          className="cash-button px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold"
        >
          Pay $10 with Cash App
        </a>

        <a
          href="https://cash.app/$MadMadisonAI/20"
          className="cash-button px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold"
        >
          Pay $20 with Cash App
        </a>

        <a
          href="https://cash.app/$MadMadisonAI/50"
          className="cash-button px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold"
        >
          Pay $50 with Cash App
        </a>
      </section>

      {/* Cash App Subscription Buttons */}
      <section className="w-full flex flex-col items-center gap-4 mt-10">
        <a
          href="https://cash.app/$MadMadisonAI?amount=10&subscription=true"
          className="cash-sub px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold"
        >
          $10 Monthly Subscription
        </a>

        <a
          href="https://cash.app/$MadMadisonAI?amount=20&subscription=true"
          className="cash-sub px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold"
        >
          $20 Monthly Subscription
        </a>

        <a
          href="https://cash.app/$MadMadisonAI?amount=50&subscription=true"
          className="cash-sub px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold"
        >
          $50 Monthly Subscription
        </a>
      </section>

      {/* Dynamic ShopMAD Store Section */}
      <section className="w-full mt-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">ShopMAD Store</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* If backend products exist, show them */}
          {products.length > 0 &&
            products.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-6 shadow-md flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <a
                  href={`https://cash.app/$MadMadisonAI/${product.price}`}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold"
                >
                  Buy for ${product.price}
                </a>
              </div>
            ))}

          {/* Fallback store if backend isn't ready */}
          {products.length === 0 && (
            <>
              <div className="border rounded-xl p-6 shadow-md flex flex-col items-center">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Sample Product 1</h3>
                <p className="text-gray-600 mb-4">Your product description.</p>
                <a
                  href="https://cash.app/$MadMadisonAI/25"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold"
                >
                  Buy for $25
                </a>
              </div>

              <div className="border rounded-xl p-6 shadow-md flex flex-col items-center">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Sample Product 2</h3>
                <p className="text-gray-600 mb-4">Your product description.</p>
                <a
                  href="https://cash.app/$MadMadisonAI/40"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold"
                >
                  Buy for $40
                </a>
              </div>

              <div className="border rounded-xl p-6 shadow-md flex flex-col items-center">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Sample Product 3</h3>
                <p className="text-gray-600 mb-4">Your product description.</p>
                <a
                  href="https://cash.app/$MadMadisonAI/60"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold"
                >
                  Buy for $60
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full mt-16">
        <Features />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

