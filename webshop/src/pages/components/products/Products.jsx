import React from 'react'
import './Products.css'

function Products() {
  return (
    <section className='section-products'>
        <div className="product">
            <button className="product-gpu">
                <label htmlFor="text">GPU</label>
            </button>
        </div>

        <div className="product">
            <button className="product-cpu">
                <label htmlFor="text">CPU</label>
            </button>
        </div>

        <div className="product">
            <button className="product-ram">
                <label htmlFor="text">Ram</label>
            </button>
        </div>

    </section>
  )
}

export default Products;