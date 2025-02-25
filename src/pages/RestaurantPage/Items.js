import React from "react";

function Items({ title, items }) {
  
  return (
    <div className="items-con">
      <div className="items">
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          {items.map((value) => {
            return (
              <main>
                <section>
                  <p>
                    <b>{value.name}</b>
                  </p>
                  <p>{value.description}</p>
                  <p>
                    <b>{value.price}</b>
                  </p>
                </section>
                <section>
                  <img src={value.img} alt="items" />
                </section>
              </main>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
