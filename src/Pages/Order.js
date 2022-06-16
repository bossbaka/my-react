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
      <div>
        {orders &&
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
                  <TableContainer component={Paper}>
                    <Table aria-label="spanning table">
                      <TableHead>
                        <TableRow>
                          <TableCell>สินค้า</TableCell>
                          <TableCell align="center">จำนวน</TableCell>
                          <TableCell align="center">รวม</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {order.orders &&
                          order.orders.map((record, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                {record.product.productName}
                              </TableCell>
                              <TableCell> {record.quantity} </TableCell>
                              <TableCell>
                                {record.product.unitPrice * record.quantity}
                              </TableCell>
                            </TableRow>
                          ))}

                        <TableRow>
                          <TableCell align="right">
                            ยอดรวม {order.totalPrice}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Card>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div>
      <Helmet>
        <title>my-react | Orders</title>
      </Helmet>
      <Typography variant="h4">รายการสั่งซื้อ</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={4} md={3}>
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
