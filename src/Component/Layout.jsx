import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./padges/Navbar";
import Footer from "./padges/Footer";

export default function Layout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet></Outlet>

      <Footer />
    </div>
  );
}
