import React from "react";
import img1 from "../public/Rectangle 13 (2).png";
import img2 from "../public/Rectangle 13-1.png";
import img3 from "../public/Rectangle 13-2.png";
import img4 from "../public/Rectangle 13-3.png";
import img5 from "../public/Rectangle 13-4.png";
import img6 from "../public/Rectangle 13-5.png";
import { useNavigate } from "react-router-dom";

function ThirdSection() {
  const navigate = useNavigate()
  return (
    <div className="third-con">
      <div>
        <p>
          <b>Populer Restaurants</b>
        </p>
      </div>
      <div className="third">
        <div onClick={() => navigate("restaurant/6/#top")}>
          <img src={img1} />
          <section>
            <p>McDomalds London</p>
          </section>
        </div>
        <div onClick={() => navigate("restaurant/6/#top")}>
          <img src={img2} />
          <section>
            <p>Papa John's</p>
          </section>
        </div>
        <div onClick={() => navigate("restaurant/6/#top")}>
          <img src={img3} />
          <section>
            <p>KFC West London</p>
          </section>
        </div>
        <div onClick={() => navigate("restaurant/6/#top")}>
          <img src={img4} />
          <section>
            <p>Texas Chicken</p>
          </section>
        </div>
        <div onClick={() => navigate("restaurant/6/#top")}>
          <img src={img5} />
          <section>
            <p>Burgger King</p>
          </section>
        </div>
        <div onClick={() => navigate("restaurant/6/#top")}>
          <img src={img6} />
          <section>
            <p>Shaurma1</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
