// src/app/about/page.js
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Star, 
  Shield, 
  Leaf, 
  Users,
  ArrowRight, 
  Quote 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Craftsmanship",
    description: "Every candle is handcrafted with attention to detail and love for the art."
  },
  {
    icon: Star,
    title: "Quality",
    description: "We use only the finest ingredients to ensure a superior fragrance experience."
  },
  {
    icon: Shield,
    title: "Authenticity",
    description: "Our designs are inspired by genuine cultural elements and traditions."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to eco-friendly practices and sustainable packaging."
  }
];

const testimonials = [
  {
    text: "These candles bring such warmth and character to my home. The attention to detail is remarkable!",
    author: "Priya M.",
    location: "Mumbai"
  },
  {
    text: "The ladoo candles were perfect for my Diwali decoration. Everyone asked where I got them!",
    author: "Rahul S.",
    location: "Delhi"
  },
  {
    text: "Not just candles, but pieces of art. The fragrances are divine and long-lasting.",
    author: "Anita K.",
    location: "Bangalore"
  }
];

const teamMembers = [
  {
    name: "Aarti Sharma",
    role: "Founder & Lead Designer",
    image: "/images/462255724_1967691200351775_8345852566199755199_n.jpg",
    bio: "With a passion for traditional art forms and modern design, Aarti brings creativity and innovation to every candle."
  },
  {
    name: "Raj Patel",
    role: "Master Craftsman",
    image: "/images/462255724_1967691200351775_8345852566199755199_n.jpg",
    bio: "Raj's expertise in candle making spans over a decade, ensuring each piece meets our quality standards."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-neutral-100 to-neutral-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Crafting Memories, One Candle at a Time
          </p>
        </div>
      </div>

      {/* Brand Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Founded in 2023,ArtsyDeepika began with a simple yet profound vision: 
                  to create candles that celebrate the rich tapestry of Indian culture while 
                  bringing warmth and elegance to modern homes.
                </p>
                <p>
                  Our journey started in a small Mumbai workshop, where we experimented with 
                  traditional shapes and contemporary fragrances. What began as a passion 
                  project quickly evolved into something more meaningful as we discovered the 
                  joy of sharing our creations with others.
                </p>
                <p>
                  Today, each candle we craft tells a story - of tradition, of innovation, 
                  and of the beautiful moments they help create in homes across the country.
                </p>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="images/Strawberry/Strawberry4.jpg"
                alt="Candle making process"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-neutral-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex p-3 rounded-full bg-neutral-100 mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-neutral-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-neutral-600 mb-2">{member.role}</p>
                  <p className="text-sm text-neutral-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="bg-neutral-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-neutral-300 mb-4" />
                  <p className="text-neutral-600 mb-4">{testimonial.text}</p>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Join Us in Celebrating the Art of Fragrance
          </h2>
          <p className="text-neutral-600 mb-8">
            Discover our collection of handcrafted candles and bring the warmth of tradition into your home.
          </p>
            <Button size="lg" className="gap-2">
                <Link href="/candles" className="hover:text-neutral-600"> Explore Our Collection </Link>
            <ArrowRight className="h-4 w-4" />
            </Button>
        </div>
      </section>
    </div>
  );
}