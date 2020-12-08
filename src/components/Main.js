import React from "react";
import "./Main.css";
import ordersData from '../assets/ordersData.json';

export default function Main() {
  const ordersArray = ordersData.orders;
  const orderDetails = ordersArray.map(order => 
    <div className='categories'>
      <p>{order.orderNo}</p>
      <p>{order.date}</p>
      <button>See order details</button>
    </div>)

  return (
    <div className='main'>
      <h2 className='orders'>Orders List</h2>
      <h5 className='page'>Home</h5>
      <div className='container'>
        <h2 className='dashboard'>Dashboard</h2>
        <div className='all-orders'>
          <div className='categories'>
            <h4>Order no.</h4>
            <h4>Date</h4>
            <h4>Details</h4>
          </div>

          <div className='display-data'>
            {orderDetails}
          </div>

        </div>
      </div>
    </div>
  );
}
