import React, { useState, useEffect } from "react";
import axios from "axios";
import Monitor from "../components/monitor/Monitor";

function Home() {
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
      <Monitor products={products} />
    </div>
  );
}

export default Home;
