import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-slate-100">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
