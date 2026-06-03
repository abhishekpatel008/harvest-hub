// import React from 'react';

import Price from "./Price";

export default function ProductCard({ item }) {
  return (
    <div className="w-100 h-125 rounded-md mx-auto border border-gray-300 shadow-md overflow-hidden flex flex-col bg-white hover:shadow-lg transition">
      <div className="relative w-full h-72 border-b border-gray-300">
        <img src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
      </div>
      <div className="relative h-48 p-4 flex flex-col font-primary">
        {/* Product Title */}
        <h2 className="text-xl font-primary font-semibold text-primary mb-2">{item.title}</h2>
        {/* Supplier/Farm name */}
        <h3 className="font-primary font-semibold text-base mb-2">Supplier: {item.farmName}</h3>
        {/* Product Description */}
        <p className="font-primary text-base text-gray-600 mb-4">{item.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="text-primary font-primary font-semibold py-2 px-4 rounded-tl-md bg-lighter">
            <Price currency="$" price={item.price} />
          </div>
        </div>
      </div>
    </div>
  )
}
