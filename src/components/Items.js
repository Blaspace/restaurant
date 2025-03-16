import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantContext from "../context/RestaurantContext";
import { IoIosCheckmark } from "react-icons/io";
import PopUp from "./PopUp";

function Items({ title, items }) {
  const [menu, setMenu] = useState([]);
  //const [incart, setIncart] = useState(false)
  const [message, setMessage] = useState(null)
  const {setCart} = useContext(RestaurantContext)
  const params = useParams();

  useEffect(() => {
    console.log(params);

    if (params?.filter && params?.filter !== "all") {
      const i = items.filter((value) => value.category === params.filter);
      console.log(i);
      setMenu(i);
    } else {
      setMenu(items);
    }
  }, [params]);

  const handleAddToCart = (item) => {
    const u = localStorage.getItem("cartItem");
    const cart = JSON.parse(u) || [];
    const duplicate = cart.filter((value) => value.name === item.name);
    if (duplicate.length) {
      setMessage(`Item "${item.name}" already added to cart!`);
    } else {
      setCart([...cart, {...item, num: 1}])
      const i = JSON.stringify([...cart, {...item, num: 1}]);
      localStorage.setItem("cartItem", i);
      //setMessage(`Item "${item.name}" added to cart!`);
    }
  };

  return (
    <div className="items-con">
      <PopUp message={message} setMessage={setMessage}/>
      <div className="items">
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          {menu.map((value) => {
            const i = JSON.parse(localStorage.getItem('cartItem')) || [] 
            const x = i?.filter(v => v.name === value.name)
           
            return (
              <main>
                <section>
                  <p>
                    <b>{value.name}</b>
                  </p>
                  <p>{value.description}</p>
                  <p>
                    <b>NGN {value.price}</b>
                  </p>
                </section>
                <section>
                  <img src={value.img} alt="items" />
                  <span onClick={() => handleAddToCart(value)} >
                    {
                    !x.length ?<b style={{backgroundColor: "#03081f"}}>+</b>:
                    <b style={{backgroundColor: "#fc8a06"}}><IoIosCheckmark/></b>
                    }
                  </span>
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
