import React from 'react';
import ProductCard from './ProductCard';

export default function ProductListings({ productList }) {
  return (
    <div className="max-w-\[1152px\] mx-auto justify-stretch">
      <div className="flex flex-wrap justify-items-center gap-x-6 gap-y-8 py-12">
        {productList && productList.length > 0 ? (
          productList.map((item) => (
            <ProductCard key={item.id} item={item} />
          )
          )
        ) : (
          <p className="text-center text-primary font-primary font-bold text-lg justify-center">No harvest items found matching your search.</p>
        )}
      </div>
    </div>
  );
}
