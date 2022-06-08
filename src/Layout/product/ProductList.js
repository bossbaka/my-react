import React from "react";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";

function ProductList({ products, onAddOrder }) {
  const showProducts = () => {
    if (products) {
      return products.map((product) => (
        <ProductItem
          key={product.productId}
          product={product}
          onAddOrder={onAddOrder}
        />
      ));
    }
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {showProducts()}
    </Grid>
  );
}

export default ProductList;
