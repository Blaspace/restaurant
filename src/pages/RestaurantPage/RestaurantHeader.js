import React from "react";
import { useParams } from "react-router-dom";

function RestaurantHeader({restaurant}) {
  const params = useParams()
  return (
    <div className="rest-header-con" id="top">
      <div className="rest-header">
        <section>
          <p>I'm loving it</p>
          <h1>{restaurant[0].name}</h1>
          <div>
            <button>Minimum order 21 GPB</button>
            <button>Delivery in 20-25 Minutes</button>
          </div>
          <img src={require("../../public/Rectangle 62.png")} width={"90px"}/>
        </section>
        <img
          src={require("../../public/Rectangle 44.png")}
        />
      </div>
    </div>
  );
}

export default RestaurantHeader;
