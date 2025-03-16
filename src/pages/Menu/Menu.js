import React, { useState, useContext} from "react";
import Items from "../../components/Items";
import TopSection from "../../components/TopSection";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ThirdSection from "../../components/ThirdSection";
import Filter from "./Filter";
import "./menu.css";
import RestaurantContext from "../../context/RestaurantContext";

function Menu() {
  const [filter, setFilter] = useState(null);
  const {items} = useContext(RestaurantContext)
  
  return (
    <div>
      <TopSection />
      <Nav />
      <Filter setFilter={setFilter} />
      <br />
      <br />
      <Items items={items} filter={filter} />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default Menu;
