import React from 'react'
import {featuredProducts } from '../data.js'
import './featuredproducts.scss'

export const FeaturedProducts = () => 

 (
    <div className='featured-products-container'>
        {featuredProducts.map((product)=>(
            <div key={product.id} className='featured-product'>
                <h2>{product.title}</h2>
                <img src={product.thumbnail} alt={product.title}/>
                </div>
        ))}

    </div>
  )

