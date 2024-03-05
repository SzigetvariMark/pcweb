import Layout from "@components/Layout";
import AuctionForm from "@components/AuctionForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditAuctionPage = () => {
  const [auctionInfo, setAuctionInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/auction?id=" + id).then((response) => {
      setAuctionInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Auction</h1>
      {auctionInfo && <AuctionForm {...auctionInfo} />}
    </Layout>
  );
};

export default EditAuctionPage;
