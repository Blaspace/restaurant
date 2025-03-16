import React from "react";
import img1 from "../public/Rectangle 13 (2).png";
import img2 from "../public/Rectangle 13-1.png";
import img3 from "../public/Rectangle 13-2.png";
import img4 from "../public/Rectangle 13-3.png";
import img5 from "../public/Rectangle 13-4.png";
import img6 from "../public/Rectangle 13-5.png";
import { useNavigate, useParams } from "react-router-dom";

function ThirdSection() {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div className="third-con">
      <div>
        <p>
          <b>Populer Restaurants</b>
        </p>
      </div>
      <div className="third">
        <div>
          <a href="../../restaurant/McDonald's East London/#nav">
            <img src={img1} />
            <section>
              <p>McDomalds London</p>
            </section>
          </a>
        </div>

        <div>
          <a href="../../restaurant/Papa John's/#nav">
            <img src={img2} />
            <section>
              <p>Papa John's</p>
            </section>
          </a>
        </div>
        <div>
          <a href="../../restaurant/KFC West London/#nav">
            <img src={img3} />
            <section>
              <p>KFC West London</p>
            </section>
          </a>
        </div>
        <div>
          <a href="../../restaurant/Texas Chicken/#nav">
            <img src={img4} />
            <section>
              <p>Texas Chicken</p>
            </section>
          </a>
        </div>
        <div>
          <a href="../../restaurant/Burgger King/#nav">
            <img src={img5} />
            <section>
              <p>Burgger King</p>
            </section>
          </a>
        </div>
        <div>
          <a href="../../restaurant/Shaurma1/#nav">
            <img src={img6} />
            <section>
              <p>Shaurma1</p>
            </section>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
