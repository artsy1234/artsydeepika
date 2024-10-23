"use client"
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ImageCarousel } from './ImageCarousel.jsx';

export function ProductModal({ product, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="space-y-2 sm:space-y-4">
          <DialogTitle className="text-lg sm:text-2xl font-semibold pr-8">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-2 sm:mt-4">
          <div className="w-full">
            <ImageCarousel
              images={product.images}
              currentIndex={currentImageIndex}
              setCurrentIndex={setCurrentImageIndex}
            />
          </div>
          <div className="space-y-3 sm:space-y-6">
            <div>
              <h3 className="text-sm sm:text-lg font-medium mb-1 sm:mb-2">Description</h3>
              <p className="text-xs sm:text-base text-neutral-600">{product.description}</p>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-medium mb-1 sm:mb-2">Price</h3>
              <p className="text-lg sm:text-2xl font-bold text-neutral-900">{product.price}</p>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-medium mb-1 sm:mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-xs sm:text-base text-neutral-600">
                {product.features.map((feature, index) => (
                  <li key={index} className="leading-tight sm:leading-normal">{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-neutral-500">Category: {product.category}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}