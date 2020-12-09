import React from 'react';
import './OrderDetail.css';

export default function OrderDetail() {
    return (
        <div className='orderDetail-component'>
            <h2 className='orderDetail-title'>Order Details</h2>

            <div className='detailed-order'>
                <h3>Detailed order</h3>
                <h4>Order No.</h4>
                <h4>Status:</h4>
                <h4>Placed on:</h4>
                <button>Display items</button>
                <h3 className='shipping'>Shipping Address</h3>
                <h4>Name:</h4>
                <h4>Adress:</h4>
            </div>

            <div className='btn-order'>
                <button className='reorder-btn'>Reorder</button>
                <button className='delete-btn'>Delete Order</button>
            </div>
        </div>
    )
}
