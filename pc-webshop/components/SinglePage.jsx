import React, { useState } from "react";
import { Button } from "./ui/button";

const SinglePage = ({ product }) => {
  const [allImg, setAllImg] = useState(product.images);

  return (
    <>
      <div className="mt-6 flex justify-around w-full">
        <div className="shadow-xl p-10 rounded-xl">
          <img src={product.images[0]} alt="kep" className="h-60" />
          <button className="flex gap-10 mt-6">
            {allImg.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="kep"
                className="h-20 hover:border-2 transition-transform border-gray-500 p-2 rounded-sm"
              />
            ))}
          </button>
        </div>
        <div className="shadow-xl p-10 rounded-xl flex flex-col justify-between">
          <div>
            <h1 className="title">{product.title}</h1>
            <p className="text-2xl font-bold text-red-500">{product.price}Ft</p>
            <p>Raktáron: 3db</p>
          </div>
          <div>
            <Button variant="default" className="w-full text-lg">
              Kosárba
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 shadow-xl p-10">
        <h2 className="title">Leírás:</h2>
        <p className="mt-2">Leírás: {product.description}</p>
      </div>
    </>
  );
};

export default SinglePage;
