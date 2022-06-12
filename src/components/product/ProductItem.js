import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function ProductItem({ product, onAddOrder, onDelProducts, onEditProducts }) {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <img src={product.thumbnail} alt={product.productName} />
      <p>{product.productName} </p>
      <p>{product.unitPrice}</p>

      {onAddOrder && <Button onClick={() => onAddOrder(product)}>ซื้อ</Button>}

      {(onDelProducts || onEditProducts) && (
        <Button onClick={() => onEditProducts(product)}>แก้ไข</Button>
      )}

      {(onDelProducts || onEditProducts) && (
        <Button onClick={() => onDelProducts(product)}>ลบ</Button>
      )}
    </Grid>
  );
}

export default ProductItem;
