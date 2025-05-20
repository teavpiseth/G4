import { useState } from "react";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      category: "3D PRINTERS",
      name: "Fixed-Wing Hybrid Surveillance Drone VW",
      price: 1450,
      image:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25626687/DSC08433.jpg?quality=90&strip=all&crop=16.675%2C0%2C66.65%2C100&w=2400",
    },
    {
      id: 2,
      category: "3D PRINTERS",
      name: "Over-Ear Headphones FX-9901 Orange",
      price: 890,
      image:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25626687/DSC08433.jpg?quality=90&strip=all&crop=16.675%2C0%2C66.65%2C100&w=2400",
    },
    {
      id: 3,
      category: "3D PRINTERS",
      name: "Smartphone LS-589662 Midnight Black",
      price: 770,
      image:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25626687/DSC08433.jpg?quality=90&strip=all&crop=16.675%2C0%2C66.65%2C100&w=2400",
    },
    {
      id: 4,
      category: "3D PRINTERS",
      name: "Smart Robotic Vacuum Cleaner FZP-550",
      price: 440,
      image:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25626687/DSC08433.jpg?quality=90&strip=all&crop=16.675%2C0%2C66.65%2C100&w=2400",
    },
    {
      id: 5,
      category: "3D PRINTERS",
      name: "High-Airflow Tempered Glass Computer Case",
      price: 3850,
      image:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25626687/DSC08433.jpg?quality=90&strip=all&crop=16.675%2C0%2C66.65%2C100&w=2400",
    },
  ];

  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500 font-medium">
                {product.category}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" />
                </button>
                <button className="text-gray-400 hover:text-gray-700 transition-colors">
                  share
                </button>
              </div>
            </div>

            <div className="flex-grow flex items-center justify-center py-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-32 w-auto object-contain"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-medium text-sm mb-2">{product.name}</h3>
              <p className="font-bold text-xl">
                ${product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
