import React from "react";
import "./Products.css";

function Products() {
  return (
    <main className="producst--main">
      <h1>Üdvözlet a PC Webshop Weboldalán!</h1>
      <section className="section-products">
        <div className="product">
          <button className="product-gpu">
            <label htmlFor="text" className="label-homepage">
              GPU
            </label>
          </button>
        </div>

        <div className="product">
          <button className="product-cpu">
            <label htmlFor="text" className="label-homepage">
              CPU
            </label>
          </button>
        </div>

        <div className="product">
          <button className="product-ram">
            <label htmlFor="text" className="label-homepage">
              RAM
            </label>
          </button>
        </div>
      </section>

      <section className="section-products-second">
        <div className="product">
          <button className="product-mtb">
            <label htmlFor="text" className="label-homepage">
              MOBO
            </label>
          </button>
        </div>

        <div className="product">
          <button className="product-psu">
            <label htmlFor="text" className="label-homepage">
              PSU
            </label>
          </button>
        </div>

        <div className="product">
          <button className="product-case">
            <label htmlFor="text" className="label-homepage">
              CASE
            </label>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Products;
