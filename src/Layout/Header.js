import React from "react";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const menuList = [
    {
      label: "หน้าหลัก",
      link: "/",
    },
    {
      label: "รายการสั่งซื้อ",
      link: "/orders",
    },
    {
      label: "สินค้า",
      link: "/products",
    },
  ];

  return (
    <div className="bg-sky-600 p-4 flex justify-between  items-center">
      <Typography variant="h3">LOGO</Typography>
      <ul className="flex gap-5 list-none">
        {menuList.map((item, index) => (
          <li key={index}>
            <Link
              className={`${
                item.link === location.pathname
                  ? "underline text-gray-50"
                  : "no-underline"
              }`}
              to={item.link}
            >
              <Typography className="text-gray-50" variant="h6">
                {item.label}{" "}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
