import React, { useState, useEffect } from "react";
import Monitor from "./monitor/Monitor";

function Main() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    setProducts([
      {
        productId: 1,
        productName: "สลัดผัก",
        unitPrice: "120",
        thumbnail: "/resources/images/images/product/1.jpg",
      },
      {
        productId: 2,
        productName: "ไก่ทอด",
        unitPrice: "90",
        thumbnail: "/images/product/2.jpg",
      },
      {
        productId: 3,
        productName: "บิงซู",
        unitPrice: "200",
        thumbnail: "/images/product/3.jpg",
      },
      {
        productId: 4,
        productName: "เฟรนฟราย",
        unitPrice: "140",
        thumbnail: "/images/product/4.jpg",
      },
      {
        productId: 5,
        productName: "เค้ก 3 ชั้น",
        unitPrice: "200",
        thumbnail: "/images/product/5.jpg",
      },
      {
        productId: 6,
        productName: "กาแฟ เฮลตี้ฟู้ด",
        unitPrice: "140",
        thumbnail: "/images/product/6.jpg",
      },
    ]);
  }, []);

  return (
    <div>
      <main className="flex-1">
        <div className="min-h-screen bg-slate-100">
          <Monitor products={products} />
        </div>
      </main>
    </div>
  );
}

export default Main;
