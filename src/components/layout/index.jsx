import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function index({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default index;
