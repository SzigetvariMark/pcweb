import Layout from "@components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteAuctionPage() {
  const router = useRouter();
  const [auctionInfo, setAuctionInfo] = useState();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/api/auction?id=" + id).then((response) => {
        setAuctionInfo(response.data);
      });
    }
  }, [id]);

  function goBack() {
    router.push("/auction");
  }

  async function deleteAuction() {
    await axios.delete("/api/auction?id=" + id);
    goBack();
  }

  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete "{auctionInfo?.description}"?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteAuction}>
          Yes
        </button>
        <button onClick={goBack} className="btn-primary">
          No
        </button>
      </div>
    </Layout>
  );
}
