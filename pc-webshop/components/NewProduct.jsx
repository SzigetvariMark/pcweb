import ProductBox from "./ProductBox";

const NewProduct = ({ newProduct }) => {
  return (
    <div className="grid grid-cols-3 gap-5 pt-5">
      {newProduct.map((items) => (
        <ProductBox {...items} />
      ))}
    </div>
  );
};

export default NewProduct;
