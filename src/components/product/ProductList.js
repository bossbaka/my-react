import React from "react";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";

function ProductList({ products, onAddOrder, onDelProducts, onEditProducts }) {
  const showProducts = () => {
    if (products) {
      return products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          onAddOrder={onAddOrder}
          onDelProducts={onDelProducts}
          onEditProducts={onEditProducts}
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
