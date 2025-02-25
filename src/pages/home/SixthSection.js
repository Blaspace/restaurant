import React from "react";

function SixthSection() {
  return (
    <div className="sixth-con">
      <div className=" sixth">
        <article>
          <h3>Know more about us!</h3>
          <ul>
            <li>Frequent questions</li>
            <li>Who we are?</li>
            <li>Partiner programs</li>
            <li>Help and support</li>
          </ul>
        </article>
        <div>
          <section>
            <ul>
              <li>
                <button>How does Oder works?</button>
              </li>
              <li>What payment method are accepted?</li>
              <li>Can i track my order in real time?</li>
              <li>Are there any payment discount or promotions available?</li>
              <li>Is OrderUK available in my area?</li>
            </ul>
          </section>
          <section>
            <div>
              <main>
                <p>
                  <b>ipsum dolor sit</b>
                </p>
                <img src={require("../../public/order 1.png")} />
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </main>
              <main>
                <p>
                  <b>ipsum dolor sit</b>
                </p>
                <img src={require("../../public/order-food 1.png")} />
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </main>
              <main>
                <p>
                  <b>ipsum dolor sit</b>
                </p>
                <img src={require("../../public/food 1.png")} />
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </main>
            </div>
            <br/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                distinctio. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quia, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quia, distinctio.
              </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
