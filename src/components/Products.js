import React from 'react'
import ShopCart from './ShopCart'



export default function Products() {
  return (
    <section className='product'>
        <div className='producthead'>
            <h2>ПРОДУКЦИЯ</h2>
        </div>
        <div className='shop'> 
          <div className='position'>
            <ShopCart/>
            <ShopCart/>
            <ShopCart/>
            <ShopCart/>
            <ShopCart/>
            <ShopCart/>
            <ShopCart/>
            <ShopCart/>
          </div>
        </div>
        
    </section>
  )
}
