import Featured from "@components/Featured";
import NewProduct from "@components/NewProduct";
import { mongooseConnect } from "@lib/mongoose";
import { Product } from "@models/Product";

export default function Home({ featuedProduct, newProduct }) {
  return (
    <>
      <Featured featuedProduct={featuedProduct} />
      <NewProduct newProduct={newProduct} />
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "65c771875253a4c0aba42fd4";
  await mongooseConnect();
  const featuedProduct = await Product.findById(featuredProductId);
  const newProduct = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuedProduct: JSON.parse(JSON.stringify(featuedProduct)),
      newProduct: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}
