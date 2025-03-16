import React, { useContext, useState } from "react";
import Nav from "../../components/Nav";
import RestaurantHeader from "./RestaurantHeader";
import Footer from "../../components/Footer";
import ThirdSection from "../../components/ThirdSection";
import "./restaurant.css";
import FirstSection from "./FirstSection";
import TopSection from "../../components/TopSection";
import TopSection2 from "./TopSection";

import FilterSection from "./FilterSection";
import Items from "../../components/Items";
import DeliverySection from "./DeliverySection";
import Location from "./Location";
import Review from "./Review";
import RestaurantContext from "../../context/RestaurantContext";
import { useParams } from "react-router-dom";

function Restaurant() {
  const { restaurants, items } = useContext(RestaurantContext);

  const params = useParams();
  const [restaurant, setRestaurant] = useState(
    restaurants.filter((value) => value.name === params.id)
  );

  return (
    <div>
      <TopSection />
      <Nav />
      <RestaurantHeader restaurant={restaurant} />
      <TopSection2 restaurant={restaurant} />
      <FilterSection />
      <FirstSection />
      {restaurant[0]?.menu?.map((value) => {
        const item = items.filter((v) => v.category === value);
        return (
          <div key={value}>
            <Items items={item} title={value} />
          </div>
        );
      })}
      <DeliverySection restaurant={restaurant} />
      <Location restaurant={restaurant} />
      <Review />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default Restaurant;
