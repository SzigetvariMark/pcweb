import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import "./Products.css";

function Products() {
  return (
    <main className="products--main">
      <h1 className="products--title">Kategóriák</h1>
      <section className="section-products">
        <div className="product">
          <Link to="/actions">
            <input type="button" className="product-gpu" value="GPU"></input>
          </Link>
        </div>

        <div className="product">
          <input type="button" className="product-cpu" value="CPU" />
        </div>

        <div className="product">
          <input type="button" className="product-ram" value="RAM" />
        </div>
      </section>

      <section className="section-products-second">
        <div className="product">
          <input type="button" className="product-mtb" value="MOBO" />
        </div>

        <div className="product">
          <input type="button" className="product-psu" value="PSU" />
        </div>

        <div className="product">
          <input type="button" className="product-case" value="CASE" />
        </div>
      </section>
    </main>
  );
}

export default Products;
