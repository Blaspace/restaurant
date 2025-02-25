import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Restaurant from "./pages/RestaurantPage/Restaurant";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
    </Routes>
  );
}

export default App;
