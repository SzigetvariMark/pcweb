import ProductBox from "./ProductBox";

const NewProduct = ({ newProduct }) => {
  return (
    <>
      <h1 className="font-bold bg-slate-700 p-4 rounded-3xl text-yellow-50 text-xl font-satoshi">
        Új termékek
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 pt-5">
        {newProduct.map((items, index) => (
          <ProductBox key={index} {...items} />
        ))}
      </div>
    </>
  );
};

export default NewProduct;
