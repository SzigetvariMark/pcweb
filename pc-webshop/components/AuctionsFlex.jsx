import React from "react";
import AuctionsFeatured from "./AuctionsFeatured";

const AuctionsFlex = ({ auctions }) => {
  return (
    <div className="flex flex-col gap-16 p-10 items-center border-2 rounded-lg shadow-md mt-8 ">
      {auctions.map((items, index) => (
        <AuctionsFeatured key={index} {...items} />
      ))}
    </div>
  );
};

export default AuctionsFlex;
