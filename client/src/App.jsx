import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchUser,
  loginUser,
  signoutUser,
} from "./features/user/userSlice.js";
import "./App.css";

import LandingPage from "./pages/Landing-page/LandingPage";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Layout from "./components/Layout.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import Dashboard from "./admin-panel/Dashboard.jsx";
import ProductPage from "./pages/product-page/ProductPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import Products from "./pages/products/Products.jsx";
import Orders from "./pages/orders/Orders.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/user/cart" element={<CartPage/>} />
          <Route path="/user/orders" element={<Orders/>} />
          <Route path="/products" element={<Products/>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin" element={<AdminRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/not-found" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
