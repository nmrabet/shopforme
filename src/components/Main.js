import React from "react";
import "./Main.css";
import ordersData from "../assets/ordersData.json";
import { Link } from "react-router-dom";

export default function Main() {
  const ordersArray = ordersData.orders;

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
            {ordersArray.map((order) => (
              <OrderLi order={order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderLi({ order }) {
  return (
    <ul className='order-container'>
      <li>{order.orderNo}</li>
      <li>{order.date}</li>
      <li key={order._id}>
        <Link to={`/home/${order._id}`} className='details-link'>
          See order details
        </Link>
      </li>
    </ul>
  );
}
