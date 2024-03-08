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
        console.log(error);
      }
    });
  }, []);
  return (
    <>
      <div className="flex gap-64 p-10 items-center rounded-lg mt-10 ">
        {auctionData.map((items) => (
          <>
            <div className="">
              <div>
                <h2 className="title">{items.title}</h2>
                <div className="flex gap-4">
                  <p>{items.price}Ft</p>
                  <p>4 licit</p>
                  <p>3óra 12perc</p>
                </div>
                <Button className="mt-2">Licitálok</Button>
              </div>
            </div>
            <div>
              <button>
                <img src={items.images} alt="kep" className="w-60" />
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AuctionsFeatured;
