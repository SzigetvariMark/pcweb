import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";

const AuctionsFeatured = () => {
  const [auctionData, setAuctionData] = useState([]);
  useEffect(() => {
    axios.get("/api/auction").then((respone) => {
      try {
        setAuctionData(respone.data);
      } catch (error) {
        console.log(respone.error);
      }
    });
  }, []);
  return (
    <>
      <div className="flex flex-col gap-16 p-10 items-center border-2 rounded-lg shadow-md mt-8 ">
        {auctionData.map((items, index) => (
          <>
            <div key={index} className="flex items-center gap-40">
              <div>
                <h2 className="title">{items.title}</h2>
                <div className="flex gap-4">
                  <p>{items.price}Ft</p>
                  <p>4 licit</p>
                  <p>3óra 12perc</p>
                </div>
                <Button className="mt-2">Licitálok</Button>
              </div>
              <button>
                <img src={items.images} alt="kep" className="w-64" />
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AuctionsFeatured;
