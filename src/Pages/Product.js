import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ProductList from "../components/product/ProductList";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data));
  }, []);

  const delProducts = (product) => {
    axios.delete(`http://localhost:3001/products/${product.id}`).then((res) => {
      axios
        .get("http://localhost:3001/products")
        .then((res) => setProducts(res.data));
    });
  };

  const editProducts = () => {
    console.log("editProducts");
  };

  return (
    <div>
      <Helmet>
        <title>my-react | Produts</title>
      </Helmet>
      <Typography variant="h4">สินค้า</Typography>
      <Button className="float-right" onClick={() => console.log()}>
        เพิ่ม
      </Button>
      <ProductList
        products={products}
        onDelProducts={delProducts}
        onEditProducts={editProducts}
      />
    </div>
  );
}

export default Product;
