import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Calculator({
  totalPrice,
  orders,
  onDelOrder,
  onCancelOrder,
  onConfirmOrder,
}) {
  const showOrder = (orders) => {
    if (!orders || orders.length == 0) {
      return (
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          color="text.secondary"
          align="center"
        >
          กรุณาเพิ่มสินค้าลงยังรายการ
        </Typography>
      );
    } else {
      return (
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    <Typography variant="h6">ตะกร้าสินค้า</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>สินค้า</TableCell>
                  <TableCell align="center">จำนวน</TableCell>
                  <TableCell align="center">รวม</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{order.product.productName}</TableCell>
                    <TableCell align="center">{order.quantity}</TableCell>
                    <TableCell align="center">
                      {order.product.unitPrice * order.quantity}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => onDelOrder(order.product)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell align="right" colSpan={2}>
                    ราคารวมทั้งสิ้น
                  </TableCell>
                  <TableCell align="right"> {totalPrice} บาท</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  };

  return (
    <div>
      {showOrder(orders)}
      <Divider variant="middle" className="m-5" />
      <Stack spacing={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() => onConfirmOrder()}
        >
          ยืนยัน
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => onCancelOrder()}
        >
          ยกเลิก
        </Button>
      </Stack>
    </div>
  );
}

export default Calculator;
