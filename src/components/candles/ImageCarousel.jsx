"use client"
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function ImageCarousel({ images, currentIndex, setCurrentIndex }) {
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  

  return (
    <div className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt="Product"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4">
        <Button
          variant="secondary"
          size="icon"
          className="h-6 w-6 sm:h-8 sm:w-8 rounded-full opacity-75 hover:opacity-100"
          onClick={prevImage}
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-6 w-6 sm:h-8 sm:w-8 rounded-full opacity-75 hover:opacity-100"
          onClick={nextImage}
        >
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0">
        <div className="flex justify-center gap-1 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 transition-all rounded-full ${
                currentIndex === index ? "bg-white w-3 sm:w-4" : "bg-white/50 w-1.5 sm:w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}