import { Button } from "./ui/button";

const AuctionsFeatured = () => {
  return (
    <>
      <div className="flex gap-64 p-10 items-center rounded-lg mt-10 ">
        <div className="">
          <h2 className="title">Asus madafaka</h2>
          <div className="flex gap-4">
            <p>5000FT</p>
            <p>4 licit</p>
            <p>3óra 12perc</p>
          </div>
          <Button className="mt-2">Licitálok</Button>
        </div>
        <div>
          <button>
            <img
              src="img/IMG_1487-removebg-preview.png"
              alt="kep"
              className="w-80"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-64 p-10 items-center rounded-lg mt-10 ">
        <div className="">
          <h2 className="title">Asus madafaka</h2>
          <div className="flex gap-4">
            <p>5000FT</p>
            <p>4 licit</p>
            <p>3óra 12perc</p>
          </div>
          <Button className="mt-2">Licitálok</Button>
        </div>
        <div>
          <button>
            <img
              src="img/IMG_1487-removebg-preview.png"
              alt="kep"
              className="w-80"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default AuctionsFeatured;
