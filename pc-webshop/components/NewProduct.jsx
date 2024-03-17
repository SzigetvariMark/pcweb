import ProductsGrid from "./ProductsGrid";

const NewProduct = ({ products }) => {
  return (
    <>
      <h1 className="font-semibold text-xl font-mono">Új termékek</h1>
      <ProductsGrid products={products} />
    </>
  );
};

export default NewProduct;
