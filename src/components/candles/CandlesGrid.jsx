"use client"
import { useState } from 'react';
import { ProductCard } from './ProductCard.jsx';
import { FilterSort } from './FilterSort.jsx';
import { ProductModal } from './ProductModal.jsx';

export default function CandlesGrid({ products, categories }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("popular");

  const getMinPrice = (priceString) => {
    const match = priceString.replace('₹', '').match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const filteredProducts = products.filter(product => 
    selectedCategory === "all" ? true : product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "newest") {
      return -1;
    } else if (sortOrder === "popular") {
      return b.popularity - a.popularity;
    } else if (sortOrder === "price-low-high") {
      return getMinPrice(a.price) - getMinPrice(b.price);
    } else if (sortOrder === "price-high-low") {
      return getMinPrice(b.price) - getMinPrice(a.price);
    }
    return 0;
  });

  return (
    <>
      <FilterSort 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        categories={categories}
      />

      {sortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-neutral-600">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}