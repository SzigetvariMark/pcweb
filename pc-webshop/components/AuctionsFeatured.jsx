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
    <div className="border-2 shadow-xl border-blue-400/95 rounded-2xl p-10">
      <div className="flex items-center gap-40 max-lg:flex-col max-lg:gap-2 max-lg:text-center max-lg:p-2">
        <div>
          <h2 className="title">{title}</h2>
          <div className="font-semibold">
            <p className="font-bold text-lg text-red-500">{price}Ft</p>
            <p>4 licit</p>
            <div>
              <p>
                {days} nap {hours} óra {minutes} perc {seconds} másodperc maradt
                hátra
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
  );
};

export default AuctionsFeatured;
