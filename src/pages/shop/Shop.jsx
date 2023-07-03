import React from 'react'
import { PRODUCT } from '../../product'
import Product from './Product'
import './shop.css'

const Shop = () => {
  return (
    <div className='shop'>
        <div className="title">
            <h1>Joshi Shop</h1>
        </div>
        <div className="products">
            {PRODUCT.map((product) => (
                <Product  data={product} />
            ))}
        </div>
    </div>
  )
}

export default Shop