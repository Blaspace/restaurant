import React from "react";

function FirstSection() {
  return (
    <div className="first-con">
      <div>
        <p><b>Get up to 40% off exclusive deals</b></p>
        <ul>
          <li>Vegan</li>
          <li>Sushi</li>
          <li>Pizzer and fast food</li>
          <li>others</li>
        </ul>
      </div>
      <div className="first">
        <div className="card card1">
          <small>-40%</small>
          <section>
            <span>Restaurant</span>
            <p>Butterbrot Cafe London</p>
          </section>
        </div>
        <div className="card card2">
        <small>-40%</small>
          <section>
            <span>Restaurant</span>
            <p>Butterbrot Cafe London</p>
          </section>
        </div>
        <div className="card card3">
        <small>-40%</small>
          <section>
            <span>Restaurant</span>
            <p>Butterbrot Cafe London</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
