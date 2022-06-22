import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/product/ProductList";
import Calculator from "../components/monitor/Calculator";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { Helmet } from "react-helmet";
import { useGetProductsQuery } from "../api";

function Home() {
  const { data: products } = useGetProductsQuery();

  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addOrder = (product) => {
    let findOrder = orders.find(
      (order) => order.product.productId === product.productId
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
      (order) => order.product.productId === product.productId
    );
    let resultOrder = orders.filter(
      (order) => order.product.productId !== product.productId
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
          setTotalPrice(0);
          setOrders([]);
          setConfirm(true);
          setMsg("บันทึกรายการสั่งซื้อเรียบร้อย");
        })
        .catch((e) => {
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
      <Helmet>
        <title>my-react | Home</title>
      </Helmet>

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

export default Home;
