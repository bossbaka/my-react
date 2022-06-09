import React, { useState } from "react";
import ProductList from "../product/ProductList";
import Calculator from "./Calculator";
import Grid from "@mui/material/Grid";
import axios from "axios";

function Monitor({ products }) {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addOrder = (product) => {
    let findOrder = orders.find(
      (order) => order.product.productId == product.productId
    );
    if (findOrder) {
      findOrder.quantity++;
    } else {
      orders.push({ product: product, quantity: 1 });
    }
    const total = totalPrice + parseInt(product.unitPrice);
    setTotalPrice(total);
    setOrders(orders);
  };

  const delOrder = (product) => {
    let findOrder = orders.find(
      (order) => order.product.productId == product.productId
    );
    let resultOrder = orders.filter(
      (order) => order.product.productId != product.productId
    );
    const total =
      totalPrice - findOrder.quantity * parseInt(findOrder.product.unitPrice);
    setTotalPrice(total);
    setOrders(resultOrder);
  };

  const confirmOrder = async () => {
    await axios
      .post("http://localhost:3001/orders", {
        orderedDate: new Date(),
        totalPrice,
        orders,
      })
      .then((res) => {
        setTotalPrice(0);
        setOrders([]);
      })
      .catch((e) => console.error(e));
  };

  const cancelOrder = () => {
    setTotalPrice(0);
    setOrders([]);
  };

  return (
    <Grid alignItems="top" justifyContent="center" container spacing={2}>
      <Grid item xs={8}>
        <ProductList products={products} onAddOrder={addOrder} />
      </Grid>
      <Grid item xs={4}>
        <Calculator
          totalPrice={totalPrice}
          orders={orders}
          onDelOrder={delOrder}
          onCancelOrder={cancelOrder}
          onConfirmOrder={confirmOrder}
        />
      </Grid>
    </Grid>
  );
}

export default Monitor;
