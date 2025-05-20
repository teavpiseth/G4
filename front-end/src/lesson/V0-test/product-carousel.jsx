import { useState } from "react";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
// Product data
const products = [
  {
    id: 1,
    name: "S2 Smartwatch Silver",
    price: 80.0,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    discount: null,
    onSale: false,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 200.0,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    discount: null,
    onSale: false,
  },
  {
    id: 3,
    name: "Galaxy Tab S3 9.7 Wifi Tablet",
    price: 200.0,
    originalPrice: 225.0,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    discount: 11,
    onSale: true,
  },
  {
    id: 4,
    name: "Headphones",
    price: 200.0,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    discount: null,
    onSale: false,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 150.0,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    discount: null,
    onSale: false,
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 120.0,
    originalPrice: 150.0,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
    discount: 20,
    onSale: true,
  },
];

export default function ProductCarousel() {
  const [favorites, setFavorites] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = 4;

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(products.length - visibleProducts, prev + 1)
    );
  };

  const visibleProductsArray = products.slice(
    startIndex,
    startIndex + visibleProducts
  );
  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + visibleProducts < products.length;

  return (
    <div className="relative">
      <button
        onClick={handlePrevious}
        disabled={!canGoLeft}
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md",
          !canGoLeft && "opacity-50 cursor-not-allowed"
        )}
        aria-label="Previous products"
      >
        left
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProductsArray.map((product) => (
          <div key={product.id} className="relative flex flex-col">
            {/* Badge container */}
            <div className="absolute top-0 left-0 z-10 flex flex-col gap-1">
              {product.isNew && (
                <span className="bg-black text-white text-xs px-2 py-1">
                  New
                </span>
              )}
              {product.discount && (
                <span className="bg-red-500 text-white text-xs px-2 py-1">
                  -{product.discount}%
                </span>
              )}
              {product.onSale && (
                <span className="bg-red-500 text-white text-xs px-2 py-1">
                  Sale
                </span>
              )}
            </div>

            {/* Favorite button */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-0 right-0 z-10 p-2"
              aria-label={
                favorites.includes(product.id)
                  ? "Remove from favorites"
                  : "Add to favorites"
              }
            >
              Heart
            </button>

            {/* Product image */}
            <div className="relative h-64 w-full mb-4 bg-gray-100">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Product details */}
            <div className="mt-auto">
              <h3 className="text-lg font-medium mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "font-bold text-lg",
                    product.onSale ? "text-red-500" : ""
                  )}
                >
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!canGoRight}
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md",
          !canGoRight && "opacity-50 cursor-not-allowed"
        )}
        aria-label="Next products"
      >
        right
      </button>
    </div>
  );
}
