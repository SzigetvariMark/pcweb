import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Button } from "./ui/button";

const SingleAuctionPage = ({ auction }) => {
  const [allImg, setAllImg] = useState(auction.images);
  const [activeImages, setActiveImages] = useState(auction.images[0]);
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <div className="mt-6 flex justify-around w-full shadow-2xl border-2 border-blue-400/95 rounded-2xl max-md:flex-col max-md:w-auto">
        <div className="p-10">
          <div className="flex justify-center">
            <img src={activeImages} alt="kep" className="h-44" />
          </div>
          <div className="flex gap-10 mt-6">
            {allImg.map((image, index) => (
              <button key={index} onMouseEnter={() => setActiveImages(image)}>
                <img
                  src={image}
                  alt="kep"
                  className="h-20 hover:border-2 transition-transform border-blue-400/95 p-2 rounded-sm"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="p-10 flex flex-col justify-between max-md:p-4 max-md:text-center max-md:gap-4">
          <div>
            <h1 className="title">{auction.title}</h1>
            <p className="text-2xl font-bold text-red-500">{auction.price}Ft</p>
            <p>Raktáron: 3db</p>
          </div>
          <div>
            <Button
              variant="default"
              className="w-full text-lg gap-2 max-md:w-auto max-md:p-6 max-md:rounded-xl"
            >
              Licitálok
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 p-10 w-full shadow-2xl border-2 border-blue-400/95 rounded-2xl">
        <h2 className="title">Leírás:</h2>
        <p className="mt-2 text-lg font-mono justify-evenly">
          {auction.description}
        </p>
        <h2 className="title mt-4">Paraméter:</h2>
      </div>
    </>
  );
};

export default SingleAuctionPage;
