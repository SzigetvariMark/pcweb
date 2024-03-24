import AuctionsFlex from "@components/AuctionsFlex";

import { mongooseConnect } from "@lib/mongoose";
import { Auction } from "@models/AuctionProduct";

export default function auctions({ auctions }) {
  return (
    <>
      <h1 className="font-bold mt-6 bg-slate-700 p-4 rounded-3xl text-yellow-50 text-xl font-satoshi">
        Jelenleg futó Aukciók
      </h1>
      <AuctionsFlex auctions={auctions} />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const auctions = await Auction.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      auctions: JSON.parse(JSON.stringify(auctions)),
    },
  };
}
