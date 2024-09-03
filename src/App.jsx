import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import MainContainer from "./components/MainContainer";
import AdminPanel from "./components/AdminPanel";
import AddProducts from "./components/AddProducts";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    window.onload = function () {
      setIsLoading(true);
    };
  }, []);

  return (
    <div>
      <Loader isLoadTrue={isLoading} />
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<MainContainer />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/add-products" element={<AddProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
