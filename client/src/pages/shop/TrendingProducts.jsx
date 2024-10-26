import React, { useState } from 'react'
import ProductsCards from './ProductsCards'
import  products from '../../data/products.json'


const TrendingProducts = () => {

    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreproducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }
  return (
    <section className='section__container product__contianer'>
        <h2 className="section__header">Trending Products</h2>
        <p className='section__subheader mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Sint reprehenderit molestias omnis, quos distinctio eum
              </p>

                {/* {product card} */}
              <ProductsCards products={products.slice(0, visibleProducts)} />

                {/* {load more products btn} */}
              <div className="product__btn">
                {
                    visibleProducts <products.length && (
                        <button className='btn' onClick={loadMoreproducts}>Load More</button>
                    )
                }
              </div>
    </section>

  )
}

export default TrendingProducts