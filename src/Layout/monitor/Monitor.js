import React from "react";
import ProductList from "../product/ProductList";
import Calculator from "./Calculator";
import Grid from "@mui/material/Grid";

function Monitor({ products }) {
  return (
    <Grid alignItems="center" justifyContent="center" container spacing={2}>
      <Grid item xs={8}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={4}>
        <Calculator />
      </Grid>
    </Grid>
  );
}

export default Monitor;
