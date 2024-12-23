import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-navy flex items-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover our collection of exquisite jewelry, crafted with precision and passion.
          </p>
          <Button
            className="bg-gold hover:bg-gold-dark text-white"
            size="lg"
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container">
        <h2 className="text-3xl font-light text-navy mb-8">Featured Pieces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-light text-navy mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Rings", "Necklaces", "Earrings"].map((category) => (
              <div
                key={category}
                className="relative h-64 group overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl text-white font-light">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gold-light">
        <div className="container text-center">
          <h2 className="text-3xl font-light text-navy mb-4">
            Stay Updated
          </h2>
          <p className="text-navy-dark mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers and new arrivals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md flex-grow"
            />
            <Button className="bg-navy hover:bg-navy-dark text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;