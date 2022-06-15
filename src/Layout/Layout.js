import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

function Layout({ children }) {
  return (
    <div className="bg-neutral-200">
      <Header />
      <Container maxWidth="xl">
        <main className="flex-1 mt-7">
          <div className="min-h-screen ">
            <Outlet />
          </div>
        </main>
      </Container>

      <Footer />
    </div>
  );
}

export default Layout;
