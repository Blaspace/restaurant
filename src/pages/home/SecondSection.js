import React from "react";
import img1 from "../../public/Rectangle 13.png";
import img2 from "../../public/Rectangle 15.png";
import img3 from "../../public/Rectangle 17.png";
import img4 from "../../public/Rectangle 19.png";
import img5 from "../../public/Rectangle 21.png";
import img6 from "../../public/Rectangle 23.png";
import { useNavigate } from "react-router-dom";

function SecondSection() {
  const navigate = useNavigate();
  return (
    <div className="second-con">
      <div>
        <p>
          <b>Oder.UK populer category</b>
        </p>
      </div>
      <div className="second">
        <div >
          <img src={img1} />
          <section>
            <p>Bugger and fast food</p>
            <small>21 Restaurants</small>
          </section>
        </div>
        <div >
          <img src={img2} />
          <section>
            <p>Salads</p>
            <small>4 Restaurants</small>
          </section>
        </div>
        <div >
          <img src={img3} />
          <section>
            <p>Pasta and casuals</p>
            <small>22 Restaurants</small>
          </section>
        </div>
        <div >
          <img src={img4} />
          <section>
            <p>Pizza</p>
            <small>14 Restaurants</small>
          </section>
        </div>
        <div >
          <img src={img5} />
          <section>
            <p>Breakfast</p>
            <small>12 Restaurants</small>
          </section>
        </div>
        <div >
          <img src={img6} />
          <section>
            <p>Soups</p>
            <small>21 Restaurants</small>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
