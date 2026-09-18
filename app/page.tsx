import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Cash App Pay Buttons */}
      {/* --------------------------------------------- */}
      {/* Paste your Pay Buttons here */}
      {/* Example:
          <a href="https://cash.app/$MadMadisonAI/10" className="cash-button">
            Pay $10 with Cash App
          </a>
      */}
      {/* --------------------------------------------- */}

      {/* Cash App Subscription Buttons */}
      {/* --------------------------------------------- */}
      {/* Paste your Subscription Buttons here */}
      {/* Example:
          <a href="https://cash.app/$MadMadisonAI?amount=10&subscription=true" className="cash-sub">
            $10 Monthly Subscription
          </a>
      */}
      {/* --------------------------------------------- */}

      {/* Features Section */}
      <section className="w-full mt-10">
        <Features />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
