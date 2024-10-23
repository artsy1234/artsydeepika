import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star } from 'lucide-react'

// Assuming these are the top 3 most popular products from your catalog

export default function Home() {
  const featuredProducts = [
    {
      id: "chai-biscuit",
      name: "Chai Biscuit Candles",
      description: "Charming candles shaped like classic chai biscuits, bringing back memories of tea-time conversations.",
      image: "/images/ChaiBiscuit/chai-biscuit-1.jpg",
      price: "₹449 - ₹799",
    },
    {
      id: "laddu-candles",
      name: "Laddu Candles",
      description: "Beautifully crafted candles in the shape of traditional laddus, bringing a touch of Indian sweetness to your décor.",
      image: "/images/LadduCandles/ladoo-candle-1.jpg",
      price: "₹399 - ₹699",
    },
    {
      id: "urli-candles",
      name: "Urli Candles",
      description: "Traditional urli-shaped candles that bring elegance and cultural touch to your space.",
      image: "/images/Urli/urli-candle-1.jpg",
      price: "₹649 - ₹949",
    },
  ]
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Assorted scented candles"
          layout="fill"
          objectFit="cover"
          priority
          
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">ArtsyDeepika</h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl">
            Discover our unique collection of scented candles inspired by Indian sweets and traditional items
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
              Explore Our Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <p className="text-sm text-neutral-600 mb-4">{product.description}</p>
                {/* <p className="font-semibold">{product.price}</p> */}
              </CardContent>
              <CardFooter className="p-6 pt-0">
                
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg mb-8">
            At ArtsyDeepika, we blend the rich traditions of Indian culture with modern candle-making techniques. 
            Our journey began with a simple idea: to create scented candles that not only illuminate spaces but also 
            evoke cherished memories and cultural experiences.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn More About Us</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <Card className="flex flex-col">
              <CardContent className="flex-grow p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Pretty !!! Looks really nice. 😍
                  Thank you.
                  Can you make 2 more??"
                </p>
                <p className="font-semibold">- Happy Customer</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardContent className="flex-grow p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Pretty !!! Looks really nice. 😍
                  Thank you.
                  Can you make 2 more??"
                </p>
                <p className="font-semibold">- Happy Customer</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardContent className="flex-grow p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Pretty !!! Looks really nice. 😍
                  Thank you.
                  Can you make 2 more??"
                </p>
                <p className="font-semibold">- Happy Customer</p>
              </CardContent>
            </Card>
          
        </div>
      </section>
    </div>
  )
}