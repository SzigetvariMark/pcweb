import Featured from "@components/Featured";
import NewProduct from "@components/NewProduct";
import { mongooseConnect } from "@lib/mongoose";
import { Product } from "@models/Product";

export default function Home({ featuedProduct, products }) {
  return (
    <div>
      <Featured featuedProduct={featuedProduct} />
      <NewProduct products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "65c771875253a4c0aba42fd4";
  await mongooseConnect();
  const featuedProduct = await Product.findById(featuredProductId);
  const products = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuedProduct: JSON.parse(JSON.stringify(featuedProduct)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
