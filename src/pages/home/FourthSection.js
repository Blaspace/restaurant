import React from "react";
import img from "../../public/friends-laughing-using-mobiles 2.png";

function FourthSection() {
  return (
    <div className="fourth-con">
      <div className="fourth">
        <div>
          <img src={img} />
        </div>
        <div>
          <h1 style={{ fontWeight: "750" }}>Ordering is more</h1>
          <h1 className="color-heading">
            <span>Personal</span> & instant
          </h1>
          <p>Download the OrderUK app for fast Ordering</p>
          <img src={require("../../public/Group.png")} style={{width: "70%", position:"inherit", alignSelf:"center"}}/>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
