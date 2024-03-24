import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const AuctionsFeatured = ({ _id, title, price, images }) => {
  const [auctionData, setAuctionData] = useState([]);
  const url = "/auction/" + _id;
  return (
    <>
      <div className="flex flex-col gap-16 p-10 items-center border-2 rounded-lg shadow-md mt-8 ">
        <div className="flex items-center gap-40">
          <div>
            <h2 className="title">{title}</h2>
            <div className="flex gap-4">
              <p>{price}Ft</p>
              <p>4 licit</p>
              <p>3óra 12perc</p>
            </div>
            <Link href={url}>
              <Button className="mt-2">Licitálok</Button>
            </Link>
          </div>
          <Link href={url}>
            <img src={images[0]} alt="kep" className="w-64" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuctionsFeatured;
