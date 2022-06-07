import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  const showProducts = () => {
    if (products) {
      return products.map((product) => (
        <ProductItem key={product.productId} {...product} />
      ));
    }
  };

  return <div>{showProducts()}</div>;
}

export default ProductList;
