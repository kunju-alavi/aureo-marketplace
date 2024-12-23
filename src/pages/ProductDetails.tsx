import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Heart } from "lucide-react";
import { toast } from "sonner";

// Temporary product data - this would come from your backend
const product = {
  id: "1",
  name: "Diamond Eternity Ring",
  price: 2499,
  description: "This stunning diamond eternity ring features perfectly matched brilliant-cut diamonds set in 18k white gold. Each stone has been carefully selected for its exceptional cut, clarity, and color, creating a seamless circle of brilliance that symbolizes eternal love.",
  images: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908"
  ],
  specifications: [
    { label: "Metal", value: "18k White Gold" },
    { label: "Diamond Quality", value: "VS1-VS2" },
    { label: "Total Carat Weight", value: "1.50ct" },
    { label: "Ring Size", value: "Available 4-10" }
  ]
};

export default function ProductDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success("Added to cart successfully!");
    // Add to cart logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light text-navy mb-2">{product.name}</h1>
              <p className="text-2xl text-gold-dark">${product.price.toLocaleString()}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <h3 className="font-medium text-navy">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.specifications.map((spec) => (
                  <div key={spec.label}>
                    <p className="text-sm text-gray-500">{spec.label}</p>
                    <p className="text-navy">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-navy hover:bg-navy-dark text-white"
              >
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}