import React from 'react';
import './OrderDetail.css';
import ordersData from "../assets/ordersData.json";

export default function OrderDetail() {
    const ordersArray = ordersData.orders;
    console.log(ordersArray);
    return (
        <div className='orderDetail-component'>
            <h2 className='orderDetail-title'>Order Details</h2>

            <div className='detailed-order'>
                <h3>Detailed order</h3>
                <h5>Order No. {ordersArray.orderNo}</h5>
                <h5>Status:</h5>
                <h5>Placed on:{ordersArray.date}</h5>
                <button>Display items</button>
                <h3 className='shipping'>Shipping Address</h3>
                <h5>Name:{ordersArray.firstname} {ordersArray.lastname}</h5>
                <h5>Adress: {ordersArray.address} </h5>
            </div>

            <div className='btn-order'>
                <button className='reorder-btn'>Reorder</button>
                <button className='delete-btn'>Delete Order</button>
            </div>
        </div>
    )
}
