import React from "react";
import Button from "@mui/material/Button";

function Calculator({ totalPrice, orders, onDelOrder }) {
  const showOrder = (orders) => {
    if (!orders || orders.length == 0) {
      return <div>ไม่มีสินค้า</div>;
    } else {
      return orders.map((order) => {
        return (
          <div>
            {order.product.productName} x {order.quantity} =
            {order.product.unitPrice * order.quantity}
            <Button onClick={() => onDelOrder(order.product)}> x</Button>
          </div>
        );
      });
    }
  };
  return (
    <div>
      {totalPrice}
      {showOrder(orders)}

      <Button variant="text">ยืนยัน</Button>
      <Button variant="text">ยกเลิก</Button>
    </div>
  );
}

export default Calculator;
