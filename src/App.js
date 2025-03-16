import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Restaurant from "./pages/RestaurantPage/Restaurant";
import Login from "./pages/signup/Login"
import SignUp from "./pages/signup/SignUp"
import Offers from "./pages/offers/Offers";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/menu/:filter" element={<Menu />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/:section" element={<SignUp />} />
    </Routes>
  );
}

export default App;
