import React from "react";
import TopSection from "../../components/TopSection";
import Nav from "../../components/Nav";
import ThirdSection from "../../components/ThirdSection";
import Footer from "../../components/Footer";
import "./order.css";
import OrderList from "./OrderList";

function Order() {
  return (
    <div>
      <TopSection />
      <Nav />
      <OrderList/>
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default Order;
