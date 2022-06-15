import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
            <Card>
              <CardHeader
                action={
                  <IconButton aria-label="settings" color="error">
                    <CloseIcon onClick={() => delOrder(order)} />
                  </IconButton>
                }
                subheader={` วันที่ ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
              />

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
            </Card>
          </div>
        );
      })
    );
  };

  return (
    <div>
      <Helmet>
        <title>my-react | Orders</title>
      </Helmet>
      <Grid alignItems="top" justifyContent="center" container spacing={2}>
        <Grid item xs={3}>
          {!orders || orders.length == 0 ? (
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              color="text.secondary"
              align="center"
            >
              ไม่มีรายการสั่งซื้อ
            </Typography>
          ) : (
            showOrder()
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Order;
