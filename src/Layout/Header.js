import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

function Header() {
  const menuList = [
    {
      label: "หน้าหลัก",
      link: "/",
    },
    {
      label: "รายการสั่งซื้อ",
      link: "orders",
    },
    {
      label: "สินค้า",
      link: "products",
    },
  ];

  return (
    <div className="bg-gray-500 h-24 flex justify-between items-center">
      <Typography variant="h3">LOGO</Typography>
      <Typography variant="h3">Time</Typography>

      <ul>
        {menuList.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
