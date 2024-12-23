import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

// Temporary product data
const featuredProducts = [
  {
    id: "1",
    name: "Diamond Eternity Ring",
    price: 2499,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amV3ZWxyeXx8fHx8fDE3MDcxMzg0MzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    category: "Rings"
  },
  {
    id: "2",
    name: "Pearl Necklace",
    price: 1299,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amV3ZWxyeXx8fHx8fDE3MDcxMzg0NTc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    category: "Necklaces"
  },
  {
    id: "3",
    name: "Sapphire Earrings",
    price: 1899,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amV3ZWxyeXx8fHx8fDE3MDcxMzg0NzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    category: "Earrings"
  }
];

const collections = [
  {
    name: "Wedding Collection",
    description: "Celebrate your special day with our exquisite wedding jewelry collection.",
    image: "https://images.unsplash.com/photo-1587038785497-24d8ebd8a1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amV3ZWxyeXx8fHx8fDE3MDcxMzg0NzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    name: "Vintage Collection",
    description: "Timeless pieces inspired by classic designs and craftsmanship.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amV3ZWxyeXx8fHx8fDE3MDcxMzg0NzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-navy flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amV3ZWxyeXx8fHx8fDE3MDcxMzg0NzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
            Discover our collection of exquisite jewelry, crafted with precision and passion.
          </p>
          <Button
            className="bg-gold hover:bg-gold-dark text-white animate-fade-in"
            size="lg"
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-light text-navy mb-12 text-center">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <div key={collection.name} className="group relative overflow-hidden rounded-lg">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                  <h3 className="text-2xl text-white mb-2">{collection.name}</h3>
                  <p className="text-white/80 mb-4">{collection.description}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy w-fit">
                    View Collection <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 container">
        <h2 className="text-3xl font-light text-navy mb-12 text-center">Featured Pieces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-navy hover:bg-navy-dark text-white">
            View All Products <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-light text-navy mb-12 text-center">Why Choose Aureo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-xl text-navy mb-2">Premium Quality</h3>
              <p className="text-gray-600">Crafted with the finest materials and attention to detail</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h3 className="text-xl text-navy mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">We stand behind the quality of our jewelry</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-xl text-navy mb-2">Certified Authentic</h3>
              <p className="text-gray-600">Every piece comes with a certificate of authenticity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-light mb-4">
            Stay Updated
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers and new arrivals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="bg-gold hover:bg-gold-dark text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;