import React, { useState, useEffect } from "react";
import "./Main.css";

export default function Main() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("./ordersData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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

          <div>
            {data && data.length > 0 && data.map((item) => <p>{item.about}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
