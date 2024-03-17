import React from "react";

const SinglePage = ({ product }) => {
  return (
    <div className="mt-6 flex">
      <div>
        <img src={product.images[0]} alt="kep" className="border h-72" />
      </div>
      <div>
        <h1>Neve: {product.title}</h1>
        <p>Ára: {product.price}</p>
      </div>
    </div>
  );
};

export default SinglePage;
