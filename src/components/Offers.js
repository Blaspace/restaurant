import React from "react";

function Offers({ offers }) {
  const offer = [
    {
      restaurantName: "McDonald's East London",
      off: "-40%",
      img: require("../public/Rectangle 8.png"),
    },
    {
      restaurantName: "Papa John's",
      off: "-40%",
      img: require("../public/Rectangle 8-1.png"),
    },
    {
      restaurantName: "KFC West London",
      off: "-40%",
      img: require("../public/Rectangle 8-2.png"),
    },
    {
      restaurantName: "Texas Chicken",
      off: "-40%",
      img: require("../public/Rectangle 8 (5).png"),
    },
    {
      restaurantName: "Shaurma1",
      off: "-40%",
      img: require("../public/Rectangle 8 (3).png"),
    },
    {
      restaurantName: "Burgger King",
      off: "-40%",
      img: "../public/Rectangle 8 (4).png",
    },
  ];
  return (
    <div className="first-con">
      <div className="first">
        {offer?.map((value, i) => {
          return (
            <div
              className={`card card${i +1}`}
              style={{ backgroundImage:`url(${value.img})` }}
            >
              <small>{value.off}</small>
              <section>
                <span>Restaurant</span>
                <p>{value.restaurantName}</p>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Offers;
