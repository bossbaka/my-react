import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((res) => setOrders(res.data));
  }, []);

  const delOrder = (order) => {
    axios.delete(`http://localhost:3001/orders/${order.id}`).then((res) => {
      axios
        .get("http://localhost:3001/orders")
        .then((res) => setOrders(res.data));
    });
  };

  const showOrder = () => {
    return (
      orders &&
      orders.map((order) => {
        const date = new Date(order.orderedDate);
        return (
          <div>
            <Button onClick={() => delOrder(order)}>x</Button>
            <h5>
              วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </h5>
            <ul>
              {order.orders &&
                order.orders.map((record) => (
                  <li>
                    {record.product.productName} x {record.quantity} ={" "}
                    {record.product.unitPrice * record.quantity}
                  </li>
                ))}
            </ul>
            <p>ยอดรวม {order.totalPrice}</p>
          </div>
        );
      })
    );
  };

  return (
    <div>
      {console.log(orders)}
      <h1>Order Page</h1>
      {showOrder()}
    </div>
  );
}

export default Order;
