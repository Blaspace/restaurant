import React from "react";

function OffersHeader() {
  return (
    <div className="offer-header-con" id="top">
      <div className="offer-header">
        <section>
          <p>I'm loving it</p>
          <h1>Get the best order deals</h1>
          <div>
            <button>Minimum order 21 GPB</button>
            <button>Delivery in 20-25 Minutes</button>
          </div>
        </section>
        <article>
        <img
          src={require("../../public/Untitled-1 1 (1).png")}
          width={"40%"}
          height={"100%"}
        />
        </article>
      </div>
    </div>
  );
}

export default OffersHeader;
