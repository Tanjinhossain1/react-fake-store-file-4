import React from 'react';
import './Menubar.css'
const Menubar = (props) => {
    return (
        <div className='decoration d-flex justify-content-end me-5'>
   <div className='container'>
    <div className='row'>
    <div className="col-md-2 p-2"> Logo</div>
    <div className="col-md-10 d-flex justify-content-end">
      <li className='items'>Home</li>
      <li>Contact</li>
      <li>Cart <sup>{props.count}</sup></li>
      <li>About Us</li>
    </div>
    </div>
   </div>
     </div>
    );
};

export default Menubar;