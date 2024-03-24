import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const AuctionsFeatured = ({ _id, title, price, images, endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const endTime = new Date(endDate).getTime();
    const now = new Date().getTime();
    return Math.max(0, endTime - now);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

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
              <div>
                <p>
                  {days} nap {hours} óra {minutes} perc {seconds} másodperc
                  maradt hátra
                </p>
              </div>
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
