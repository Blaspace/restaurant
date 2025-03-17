import React, { useContext, useEffect, useRef, useState } from "react";
import { FaPlusSquare, FaMinusSquare, FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiLoader } from "react-icons/fi";
import { usePaystackPayment } from "react-paystack";
import RestaurantContext from "../context/RestaurantContext";
import PopUp from "./PopUp"
import { useNavigate } from "react-router-dom";

function Cart({ showCart, setShowCart }) {
  const [width, setWidth] = useState("0");
  const { cart, setCart } = useContext(RestaurantContext);
  const [price, setPrice] = useState();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate()

  const pay = usePaystackPayment();
  const config = {
    reference: new Date().getTime().toString(),
    email: "ngbedejames415@gmail.com",
    amount: 100 * price * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_live_825b5b9b59c4c074932aa4549f10964d0eb966f5",
  };

  useEffect(() => {
    if (showCart) {
      if (window.innerWidth >= 780) {
        setWidth("35%");
      } else {
        setWidth("100%");
      }
    } else {
      setWidth("0");
    }
  }, [showCart]);

  useEffect(() => {
    let p = 0;
    cart.forEach((v) => {
      p += v.price * v.num;
      if (v.num === 0) {
        const x = cart.filter((vi) => vi.name !== v.name);
        localStorage.setItem("cartItem", JSON.stringify(x));
        setCart(x);
      }
    });
    setPrice(p);
  }, [cart]);

  const handleRemove = (name) => {
    const x = cart.filter((v) => v.name !== name);
    localStorage.setItem("cartItem", JSON.stringify(x));
    setCart(x);
  };

  const handleAdd = (name) => {
    const i = cart.map((value) => {
      if (value.name === name) {
        value.num += 1;
      }
      return value;
    });
    localStorage.setItem("cartItem", JSON.stringify(i));
    setCart(i);
  };

  const handlReduce = (name) => {
    const i = cart.map((value) => {
      if (value.name === name) {
        value.num -= 1;
      }
      return value;
    });
    localStorage.setItem("cartItem", JSON.stringify(i));
    setCart(i);
  };

  const handlePay = () => {
    if(localStorage.getItem("token")){
    pay({
      onSuccess:()=> setMessage("Your order has been sent"),
      onClose:()=> setMessage("Sorry you payment was unsuccessful"),
      config
    });
  }else{
    navigate('../../login')
  }
  };

  return (
    <>
    <PopUp message={message} setMessage={setMessage} />
      <div className="cart" style={{ width, zIndex: "15" }}>
        <br />
        <h2>Your Cart</h2>
        <br />
        <div className="cart-con">
          <IoMdClose
            size={40}
            color="#000"
            onClick={() => setShowCart(false)}
            style={{ position: "absolute", top: "-100px", left: "10px" }}
          />
          {cart.length ? (
            cart.map((value, i) => {
              return (
                <div key={i}>
                  <span>
                    <img src={value?.img} alt="cart items" />
                  </span>
                  <section>
                    <p>{value.name}</p>
                    <p>
                      <b>
                        <small>NGN</small>
                        {value.price * value.num}.0
                      </b>
                    </p>
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      {value.num}{" "}
                      <FaPlusSquare
                        size={30}
                        onClick={() => handleAdd(value.name)}
                      />{" "}
                      <FaMinusSquare
                        size={30}
                        onClick={() => handlReduce(value.name)}
                      />
                    </p>
                    <br />
                    <FaTrashAlt
                      size={30}
                      color="red"
                      onClick={() => handleRemove(value.name)}
                    />
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
          {cart.length && (
            <div style={{ justifyContent: "spaceAround" }}>
              {" "}
              <button onClick={handlePay}>Check Out</button>{" "}
              <h2>Total: NGN {price}</h2>
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
