import React from "react";
import "./OrderDetail.css";
import { useParams } from "react-router-dom";
import ordersData from "../assets/ordersData.json";

export default function OrderDetail() {
  const orders = ordersData.orders;
  const { orderId } = useParams();
  // Ajax call to get the info about the order
  const thisOrder = orders.find((order) => order._id === orderId);

  return (
    <div className='orderDetail-component'>
      <h2 className='orderDetail-title'>Order Details</h2>

      <div className='detailed-order'>
        <h3>Detailed order</h3>
        <h5>Order No. {thisOrder.orderNo}</h5>
        <h5>Status: {thisOrder.status}</h5>
        <h5>Placed on: {thisOrder.date}</h5>
        <ul>Show items</ul>
        <h3 className='shipping'>Shipping Address</h3>
        <h5>Name: {thisOrder.name}</h5>
        <h5>
          Address: {thisOrder.address}, {thisOrder.zip}, {thisOrder.city},{" "}
          {thisOrder.state}{" "}
        </h5>
      </div>

      <div className='btn-order'>
        <button className='reorder-btn'>Reorder</button>
        <button className='delete-btn'>Delete Order</button>
      </div>
    </div>
  );
}
