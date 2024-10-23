"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Eye } from "lucide-react";

export function ProductCard({ product, onClick }) {
  return (
    <Card
      className="flex flex-col h-full group relative overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" className="flex items-center gap-2 text-sm sm:text-base">
              <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
              View Details
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base sm:text-lg font-semibold">{product.name}</h3>
          <p className="font-semibold text-base sm:text-lg">{product.price}</p>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="px-4 mt-auto sm:px-6 py-3 sm:py-4 bg-neutral-50 text-xs sm:text-sm text-neutral-500">
        {product.category}
      </CardFooter>
    </Card>
  );
}