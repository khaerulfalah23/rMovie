import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
