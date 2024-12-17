"use client";

import { Search, Home, MapPin, DollarSign } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const featuredListings = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: 1250000,
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    price: 850000,
    location: "Manhattan, NY",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: 3,
    title: "Waterfront Condo",
    price: 675000,
    location: "Miami, FL",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800&h=500",
  },
];

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    location: "",
    type: "all",
    priceRange: "all",
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2070&h=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover the perfect property in your favorite location
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  className="pl-10"
                  value={searchParams.location}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, location: e.target.value })
                  }
                />
              </div>
              <Select>
                <select
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  value={searchParams.type}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, type: e.target.value })
                  }
                >
                  <option value="all">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                </select>
              </Select>
              <Select>
                <select
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  value={searchParams.priceRange}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, priceRange: e.target.value })
                  }
                >
                  <option value="all">Any Price</option>
                  <option value="0-500000">$0 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000+">$1,000,000+</option>
                </select>
              </Select>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600">
              Explore our hand-picked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden group">
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-semibold text-primary">
                    ${listing.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {listing.location}
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="font-semibold">{listing.bedrooms}</div>
                      <div className="text-sm text-gray-500">Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{listing.bathrooms}</div>
                      <div className="text-sm text-gray-500">Baths</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{listing.sqft}</div>
                      <div className="text-sm text-gray-500">Sq Ft</div>
                    </div>
                  </div>
                  <Link href={`/property/${listing.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/properties">
              <Button variant="outline" size="lg">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let our experienced agents help you find the property of your dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button variant="secondary" size="lg">
                Browse Properties
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Contact an Agent
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}