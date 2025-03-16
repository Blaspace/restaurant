import React from "react";
import img1 from "../../public/Untitled-1 1.png";
import img from "../../public/Untitled-2 1 (1).png";

function HomeHeader() {
  return (
    <div className="header-con">
      <div className="header">
        <div>
          <p>
            <small>Your one stop platform for all you need</small>
          </p>
          <h1>
            All you need at <br /> the
            <span> best price</span>
          </h1>
          <br />
          <br />
          <form className="header-form">
            <input type="text" placeholder="Search products" />
            <button>Search</button>
          </form>
        </div>
        <div>
          <img
            src={img1}
            width={"60%"}
            style={{ position: "absolute", bottom: "0", left: "150px" }}
          />
          <img
            src={img}
            width={"35%"}
            style={{ position: "absolute", bottom: "0", left: "450px" }}
          />
        </div>
        <section>
          <div>
            <span>1</span>
            <h3>Order</h3>
            <p>
              <b>We've recieved your order</b>
            </p>
            <p>Awaiting trstaurant acceptance</p>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <span>2</span>
            <h3>Order</h3>
            <p>
              <b>We've recieved your order</b>
            </p>
            <p>Awaiting trstaurant acceptance</p>
          </div>
          <div>
            <span>3</span>
            <h3>Order</h3>
            <p>
              <b>We've recieved your order</b>
            </p>
            <p>Awaiting trstaurant acceptance</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeHeader;
