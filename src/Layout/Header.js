import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Header() {
  return (
    <div className="bg-gray-500 h-24 flex justify-between items-center">
      <Typography variant="h3">LOGO</Typography>
      <Typography variant="h3">Time</Typography>
    </div>
  );
}

export default Header;
