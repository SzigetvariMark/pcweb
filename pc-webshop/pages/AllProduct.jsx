import Nav from "@components/Nav";
import Provider from "@components/Provider";
import axios from "axios";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const [allData, setAllDate] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/product").then((response) => {
        setAllDate(response.data);
      });
    } catch (errpr) {
      console.error(response.error);
    }
  }, []);

  return (
    <>
      <Provider>
        <Nav />
      </Provider>
      <h1 className="font-bold bg-slate-700 p-4 rounded-3xl text-yellow-50 text-xl font-satoshi">
        Összes termék
      </h1>
      <div className="grid grid-cols-3 gap-5 pt-5">
        {allData.map((items, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg text-center flex flex-col items-center cursor-pointer hover:scale-90 transition-transform"
          >
            <img
              src={items.images}
              alt="nincsen kep feltoltve"
              className="max-w-ful max-h-40"
            />
            <h2 className="text-lg font-satoshi">{items.title}</h2>
            <p className="font-bold">{items.price}Ft</p>
            <button className="styled_button mt-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              Kosárba
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProduct;
