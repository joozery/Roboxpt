import React from "react";

// Example product data
const products = [
  {
    name: "Blox Fruits",
    price: "฿404.43",
    originalPrice: "฿478.03",
    image: "path/to/blox-fruits-image.jpg", // replace with actual image path
    type: "Legendary",
  },
  {
    name: "Love",
    price: "฿404.43",
    originalPrice: "฿478.03",
    image: "path/to/love-image.jpg", // replace with actual image path
    type: "Legendary",
  },
  {
    name: "500k Money",
    price: "฿478.03",
    originalPrice: "฿588.43",
    image: "path/to/money-image.jpg", // replace with actual image path
    type: "Other",
  },
  {
    name: "300k Money",
    price: "฿330.83",
    originalPrice: "฿404.43",
    image: "path/to/money-image2.jpg", // replace with actual image path
    type: "Other",
  },
  {
    name: "Pain",
    price: "฿476.55",
    originalPrice: "฿550.15",
    image: "path/to/pain-image.jpg", // replace with actual image path
    type: "Legendary",
  },
  {
    name: "Barrier",
    price: "฿275.63",
    originalPrice: "฿386.03",
    image: "path/to/barrier-image.jpg", // replace with actual image path
    type: "Rare",
  },
  // Add other products...
];

// Individual Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
      {/* Product Type Label */}
      <span className={`text-pink-400 font-bold text-sm absolute top-2 left-2 bg-pink-900 px-2 py-1 rounded-full`}>
        {product.type}
      </span>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-24 mx-auto my-4"
      />

      {/* Product Details */}
      <p className="text-gray-400 text-xs">Permanent Fruit</p>
      <p className="text-white font-bold">{product.name}</p>
      <p className="text-green-400 font-bold">{product.price}</p>
      <p className="text-gray-400 line-through text-sm">{product.originalPrice}</p>

      {/* Add to Cart Button */}
      <button className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l1.4-7H6.4m-3.4 7h1m4 0h10m-10 4a2 2 0 104 0m-4 0a2 2 0 11-4 0"
          />
        </svg>
      </button>
    </div>
  );
};

// Our Best Sellers Section
const OurBestSellers = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">
          Our Best Sellers
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Get the top items from your favorite Roblox games at the best prices!
          Check out our most popular deals below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBestSellers;