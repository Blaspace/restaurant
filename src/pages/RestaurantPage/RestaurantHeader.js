import React from "react";

function RestaurantHeader() {
  return (
    <div className="rest-header-con" id="top">
      <div className="rest-header">
        <section>
          <p>I'm loving it</p>
          <h1>McDonald's East London</h1>
          <div>
            <button>Minimum order 21 GPB</button>
            <button>Delivery in 20-25 Minutes</button>
          </div>
          <img src={require("../../public/Rectangle 62.png")} width={"90px"}/>
        </section>
        <img
          src={require("../../public/Rectangle 44.png")}
          width={"40%"}
          height={"100%"}
        />
      </div>
    </div>
  );
}

export default RestaurantHeader;
