import { products, categories } from '@/lib/data';
import CandlesGrid from '@/components/candles/CandlesGrid.jsx';
import { Button } from "@/components/ui/button";

export default function CandlesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="relative py-12 sm:py-24 bg-gradient-to-b from-neutral-100 to-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Candles</h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our unique collection of scented candles, each handcrafted to perfection. 
            Every piece tells a story of tradition reimagined through contemporary design.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* Grid */}
        <CandlesGrid products={products} categories={categories} />


        {/* Contacts Section */}
        <div className="text-center py-12 sm:py-24">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Want something custom?</h2>
      <p className="text-sm sm:text-base text-neutral-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
        Looking for a unique design or specific fragrance? Contact us to create a candle that suits your style!
      </p>
      <a 
        href="https://www.instagram.com/artsydeepika/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-neutral-900 text-neutral-600"
      >
        <Button size="lg" className="text-sm sm:text-base">Contact Us</Button>
      </a>
    </div>
      </div>
    </div>
  );
}
