const NewProduct = () => {
  return (
    <>
      <h1 className="mt-2 font-bold text-xl">Legújabb termékek</h1>
      <div className="flex justify-around gap-2 p-6">
        <div className="border border-slate-800 cursor-pointer rounded-md hover:scale-90 transition-transform">
          <img src="https://raw.githubusercontent.com/SzigetvariMark/pcweb/ef16efed00bf8dfaaf1d722e5192607b74001aa2/webshop/public/img/laptop.png"></img>
          <h2>Title</h2>
        </div>
        <div className="border-2 ">
          <h2>Title</h2>
          <img src="https://raw.githubusercontent.com/SzigetvariMark/pcweb/ef16efed00bf8dfaaf1d722e5192607b74001aa2/webshop/public/img/laptop.png"></img>
        </div>
        <div className="border-2 ">
          <h2>Title</h2>
          <img src="https://raw.githubusercontent.com/SzigetvariMark/pcweb/ef16efed00bf8dfaaf1d722e5192607b74001aa2/webshop/public/img/laptop.png"></img>
        </div>
        <div className="border-2 ">
          <h2>Title</h2>
          <img src="https://raw.githubusercontent.com/SzigetvariMark/pcweb/ef16efed00bf8dfaaf1d722e5192607b74001aa2/webshop/public/img/laptop.png"></img>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
