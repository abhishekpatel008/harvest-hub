import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({ productList }) {
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
  }

  let filteredAndSortedProducts = Array.isArray(productList) ? productList.filter((product) => {

    const title = (product.title || "").toLowerCase();
    const description = (product.description || "").toLowerCase();
    const searchTextLower = (searchText || "").toLowerCase();

    return title.includes(searchTextLower) || description.includes(searchTextLower);
  }) : []

  return (
    <div className="max-w-\[1152px\] mx-auto justify-stretch">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search products..."
          value={searchText}
          handleSearch={handleSearchChange}
        />
        <Dropdown
          label="Sort by"
          options={sortList}
          value="Popularity"
        />
      </div>
      <div className="flex flex-wrap justify-items-center gap-x-6 gap-y-8 py-12">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((item) => (
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
