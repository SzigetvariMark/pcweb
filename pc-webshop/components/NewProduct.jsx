import ProductBox from "./ProductBox";

const NewProduct = ({ newProduct }) => {
  return (
    <>
      <h1 className="font-bold bg-slate-700 p-4 rounded-3xl text-yellow-50 text-xl font-satoshi">
        Új termékek
      </h1>
      <div className="grid grid-cols-3 gap-5 pt-5">
        {newProduct.map((items) => (
          <ProductBox {...items} />
        ))}
      </div>
    </>
  );
};

export default NewProduct;
