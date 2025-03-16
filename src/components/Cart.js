import React, { useContext, useEffect, useRef, useState } from "react";
import { FaPlusSquare, FaMinusSquare, FaTrashAlt } from "react-icons/fa";
import {IoMdClose} from "react-icons/io"
import { FiLoader } from "react-icons/fi";

function Cart({cart, setCart}) {
  const [width, setWidth] = useState("0")
  const [prod, setProd] = useState(
    JSON.parse(localStorage.getItem("cartItem"))
  );

  useEffect(() => {
    if (cart) {
      if (window.innerWidth >= 780) {
         setWidth("40%")
      } else {
        setWidth("100%")
      }
    } else {
      setWidth("0")
    }
  }, [cart]); 

  return (
    <>
      <div className="cart" style={{ width, zIndex: "15" }}>
        <br />
        <h2>Your Cart</h2>
        <br />
        <div className="cart-con">
          <IoMdClose
            size={40}
            color="#000"
            onClick={()=>setCart(false)}
            style={{ position: "absolute", top: "-100px", left: "10px" }}
          />
          {prod.length ? (
            prod.map((value, i) => {
              return (
                <div key={i}>
                  <span>
                    <img src={value.img} alt="cart items" />
                  </span>
                  <section>
                    <p>{value.name}</p>
                    <br />
                    <p>
                      <b>
                        <small>$</small>
                        {value.price * value.num}.0
                      </b>
                    </p>
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      {value.num} <FaPlusSquare size={30} />{" "}
                      <FaMinusSquare size={30} />
                    </p>
                    <br />
                    <FaTrashAlt size={30} color="red" />
                  </section>
                </div>
              );
            })
          ) : (
            <h3 style={{ borderBottom: "1px solid grey" }}>
              Your cart is empty
            </h3>
          )}
          <br />
          {prod.length && (
            <div style={{ justifyContent: "spaceAround" }}>
              {" "}
              <button>Check Out</button> <h2>Total: </h2>
            </div>
          )}
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Cart;
