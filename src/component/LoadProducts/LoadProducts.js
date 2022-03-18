
import React, { useEffect, useState } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard';
// import Modals from '../Modal/Modals';
import './LoadProducts.css'
const LoadProducts = (props) => {
    const {addCard} = props;
    const [products, setProducts] = useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])
    return(
      <div className='set-col'>
       {
         products.map(product => <DisplayCard addCard={addCard} key={product.id} product={product}></DisplayCard>)
       }
      </div>
    )
};

export default LoadProducts;