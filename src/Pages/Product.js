import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ProductList from "../components/product/ProductList";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery, useDeleteProductsMutation } from "../api";
import ModalComponent from "../components/modal/Modal";

function Product() {
  const history = useNavigate();

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  const [delProducts] = useDeleteProductsMutation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/products")
  //     .then((res) => setProducts(res.data));
  // }, []);

  // const delProducts = (product) => {
  //   axios.delete(`http://localhost:3001/products/${product.id}`).then((res) => {
  //     axios
  //       .get("http://localhost:3001/products")
  //       .then((res) => setProducts(res.data));
  //   });
  // };

  const editProducts = (product) => {
    history("/products/edit/" + product.id);
  };

  return (
    <div>
      <Helmet>
        <title>my-react | Produts</title>
      </Helmet>
      <Typography variant="h4">สินค้า</Typography>
      <Button className="float-right" onClick={() => history("/products/add")}>
        เพิ่ม
      </Button>
      <ProductList
        products={products}
        onDelProducts={delProducts}
        onEditProducts={editProducts}
      />
      <ModalComponent />
    </div>
  );
}

export default Product;
