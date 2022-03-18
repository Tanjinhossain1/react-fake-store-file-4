
import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './DisplayCard.css'
const DisplayCard = (props) => {
    const {title,category,price,image} = props.product;
    return (
      <div className='card card-image'>
        <img  src={image} alt="" />
        <h3>Title: {title.slice(0, 11)}</h3>
        <h4>Category: {category}</h4>
        <h4>Price: {price}$</h4>
        <div className='d-flex ms-5 mt-5'>
        <button onClick={props.addCard} className='p-2 btn-success me-2'>Add To Cart</button>
        <button className='p-2 btn-danger me-2'>Delete</button>
        {/* <button onClick={Modals} className='p-2 btn-info'>Details</button> */}
        <ReactModal product={props.product}></ReactModal>
        </div>
      </div>
    )
};

export default DisplayCard;