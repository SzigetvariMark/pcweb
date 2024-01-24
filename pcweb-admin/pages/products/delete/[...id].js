import Layout from "@components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/api/products?id=" + id).then((response) => {
        setProductInfo(response.data);
      });
    }
  }, [id]);

  function goBack() {
    router.push("/products");
  }

  return (
    <Layout>
      <h1>Do you really want to delete "{productInfo?.description}"?</h1>
      <button className="btn-primary">Yes</button>
      <button onClick={goBack} className="btn-primary">
        No
      </button>
    </Layout>
  );
}
