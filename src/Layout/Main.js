import React, { useState, useEffect } from "react";
import Monitor from "./monitor/Monitor";
import axios from "axios";

function Main() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    // fetch(`http://localhost:3001/products`, { method: "GET" })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setProducts(res);
    //   });
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data));
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
