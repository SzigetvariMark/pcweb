import React from "react";
import ProductBox from "./ProductBox";

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 pt-5">
      {products.map((items, index) => (
        <ProductBox key={index} {...items} />
      ))}
    </div>
  );
};

export default ProductsGrid;
