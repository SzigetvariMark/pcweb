import React, { useContext, useState } from "react";
import { Button } from "./ui/button";
import { CartContext } from "./CartContext";

const SinglePage = ({ product }) => {
  const [allImg, setAllImg] = useState(product.images);
  const [activeImages, setActiveImages] = useState(product.images[0]);
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <div className="mt-6 flex justify-around w-full">
        <div className="shadow-2xl p-10 rounded-xl">
          <div className="flex justify-center">
            <img src={activeImages} alt="kep" className="h-44" />
          </div>
          <div className="flex gap-10 mt-6">
            {allImg.map((image, index) => (
              <button onClick={() => setActiveImages(image)}>
                <img
                  key={index}
                  src={image}
                  alt="kep"
                  className="h-20 hover:border-2 transition-transform border-gray-500 p-2 rounded-sm"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="shadow-2xl p-10 rounded-xl flex flex-col justify-between">
          <div>
            <h1 className="title">{product.title}</h1>
            <p className="text-2xl font-bold text-red-500">{product.price}Ft</p>
            <p>Raktáron: 3db</p>
          </div>
          <div>
            <Button
              variant="default"
              className="w-full text-lg gap-2"
              onClick={() => addProduct(product._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              Kosárba
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 shadow-2xl p-10">
        <h2 className="title">Leírás:</h2>
        <p className="mt-2">{product.description}</p>
        <h2 className="title mt-4">Paraméter:</h2>
      </div>
    </>
  );
};

export default SinglePage;
