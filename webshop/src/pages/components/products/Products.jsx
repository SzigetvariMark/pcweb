import React from 'react'
import './Products.css'

function Products() {
  return (

    <>
    <section className='section-products'>
        <div className="product">
            <button className="product-gpu">
                <label htmlFor="text" className='label-homepage'>GPU</label>
            </button>
        </div>

        <div className="product">
            <button className="product-cpu">
                <label htmlFor="text" className='label-homepage'>CPU</label>
            </button>
        </div>

        <div className="product">
            <button className="product-ram">
                <label htmlFor="text" className='label-homepage'>Ram</label>
            </button>
        </div>

    </section>

    <section className='section-products-second'>
        <div className="product">
            <button className="product-mtb">
                <label htmlFor="text" className='label-homepage'>MoBo</label>
            </button>
        </div>

        <div className="product">
            <button className="product-psu">
                <label htmlFor="text" className='label-homepage'>PSU</label>
            </button>
        </div>

        <div className="product">
            <button className="product-case">
                <label htmlFor="text" className='label-homepage'>case</label>
            </button>
        </div>

    </section>
    </>
    
    
  )
}

export default Products;