import React from 'react';

export default function OrderDetail() {
    return (
        <div className='orderDetail-component'>
            <h2>Order Details</h2>
            <div className='detailed-order'>
                <h3>Detailed order</h3>
                <h4>Order No.</h4>
                <h4>Status:</h4>
                <h4>Placed on:</h4>
                <button>Display items</button>
            </div>
            <div className='shipping-address'>
                <h3>Shipping Address</h3>
                <h4>Name:</h4>
                <h4>Adress:</h4>
            </div>
            <div className='btn-order'>
                <button>Reorder</button>
                <button>Delete Order</button>
            </div>
        </div>
    )
}
