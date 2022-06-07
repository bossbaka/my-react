import React from "react";
import Button from "@mui/material/Button";

function ProductItem({ productName, thumbnail, unitPrice }) {
  return (
    <div>
      <img src={thumbnail} alt={productName} />
      <p>{productName} </p>
      <p>{unitPrice}</p>
      <Button>ซื้อ</Button>
    </div>
  );
}

export default ProductItem;
