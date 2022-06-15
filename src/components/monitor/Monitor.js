import React, { useState } from "react";
import ProductList from "../product/ProductList";
import Calculator from "./Calculator";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Alert from "@mui/material/Alert";

function Monitor({ products }) {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState("");

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
    setConfirm(false);
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
    setConfirm(false);
  };

  const confirmOrder = (e) => {
    if (orders && orders.length > 0) {
      axios
        .post(`http://localhost:3001/orders`, {
          orderedDate: new Date(),
          totalPrice,
          orders,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setTotalPrice(0);
          setOrders([]);
          setConfirm(true);
          setMsg("บันทึกรายการสั่งซื้อเรียบร้อย");
        })
        .catch((e) => {
          console.log(e);
          console.error(e);
          setMsg(`${e.message} ล้มเหลว`);
        });
    } else {
      setTotalPrice(0);
      setOrders([]);
      setConfirm(true);
      setMsg("กรุณาเลือกสินค้าก่อน");
    }
  };

  const cancelOrder = () => {
    setTotalPrice(0);
    setOrders([]);
    setConfirm(false);
  };

  return (
    <div>
      {confirm && (
        <Alert className="mb-5" severity={`warning`}>
          {msg}
        </Alert>
      )}
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
    </div>
  );
}

export default Monitor;
