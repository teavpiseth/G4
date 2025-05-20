import Image from "next/image";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  isNew,
  discount,
  onSale,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="relative flex flex-col">
      {/* Badge container */}
      <div className="absolute top-0 left-0 z-10 flex flex-col gap-1">
        {isNew && (
          <span className="bg-black text-white text-xs px-2 py-1">New</span>
        )}
        {discount && (
          <span className="bg-red-500 text-white text-xs px-2 py-1">
            -{discount}%
          </span>
        )}
        {onSale && (
          <span className="bg-red-500 text-white text-xs px-2 py-1">Sale</span>
        )}
      </div>

      {/* Favorite button */}
      <button
        onClick={() => onToggleFavorite(id)}
        className="absolute top-0 right-0 z-10 p-2"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        heart
      </button>

      {/* Product image */}
      <div className="relative h-64 w-full mb-4 bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Product details */}
      <div className="mt-auto">
        <h3 className="text-lg font-medium mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2">
          <span
            className={cn("font-bold text-lg", onSale ? "text-red-500" : "")}
          >
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
