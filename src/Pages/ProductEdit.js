import React from "react";
import ProductForm from "../components/product/ProductForm";
import { useLocation } from "react-router-dom";

function ProductEdit() {
  const location = useLocation();
  const match = location.pathname;
  console.log(location);
  return (
    <div>
      {match.indexOf("add") > 0 && (
        <>
          <ProductForm label={"เพิ่ม"} />
        </>
      )}

      {match.indexOf("edit") > 0 && (
        <>
          <ProductForm label={"แก้ไข"} />
        </>
      )}
    </div>
  );
}

export default ProductEdit;
