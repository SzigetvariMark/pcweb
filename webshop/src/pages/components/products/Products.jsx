import React from 'react'
import './Products.css'
import gpu from "/img/gpu.avif";

function Products() {
  return (
    <section className='section-products'>
        <div className="product">
            <button className="product-info">
                <label htmlFor="text">GPU</label>
            </button>
        </div>

        <div className="product">
            <div className="">
                <h2>Desktop PC 2</h2>
                <p>High-performance desktop computer for gaming and work.</p>
                <p>Price: $1299</p>
                <input type="submit" value="Add to cart" />
            </div>
        </div>

        <div className="product">
            <div className="">
                <h2>Desktop PC 1</h2>
                <p>Powerful desktop computer with the latest hardware.</p>
                <p>Price: $999</p>
                <input type="submit" value="Add to cart" />
            </div>
        </div>
    </section>
  )
}

export default Products;