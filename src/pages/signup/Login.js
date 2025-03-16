/** @format */

import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { CiPizza, CiBurger, CiFries, CiCoffeeCup } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import "./Signup.css";

const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.target.innerText = "Loading...";
    e.target.style.backgroundColor = "lightgrey";
    e.target.style.color = "black";
    fetch(`${process.env.REACT_APP_APIURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          alert("Wrong email/password");
        } else {
          alert("please try again");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        navigate("../../");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        e.target.innerText = "Login";
        e.target.style.backgroundColor = "#2d88d4";
        e.target.style.color = "#ffffff";
      });
  };

  return (
    <>
      <div className="signup">
        <div className="signup-right">
          <h1>Welcome, login to your account</h1>
          <CiPizza
            size={50}
            color="#fc8a06"
            style={{ position: "absolute", right: "50px", top: "100px" }}
          />
          <CiBurger
            size={50}
            color="#fc8a06"
            style={{ position: "absolute", left: "50px", top: "150px" }}
          />
          <CiFries
            size={50}
            color="#fc8a06"
            style={{ position: "absolute", left: "70px", bottom: "150px" }}
          />
          <CiCoffeeCup
            size={50}
            color="#fc8a06"
            style={{
              position: "absolute",
              right: "40px",
              bottom: "80px",
              transform: "rotate(30deg)",
            }}
          />
          <IoFastFoodOutline
            size={50}
            color="#fc8a06"
            style={{ position: "absolute", left: "230px", top: "120px" }}
          />
          <br />
          <br />
          <br />
          <form onSubmit={(e) => e.preventDefault()}>
            <br />
            <br />
            <br />
            <section style={{ width: "70%", background: "#ffffff" }}>
              <label>Email</label>
            </section>
            <input
              type="email"
              placeholder="Enter school email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <section style={{ width: "70%", background: "#ffffff" }}>
              <label>Password</label>
            </section>
            <input
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button onClick={(e) => handleLogin(e)}>Login</button>
            <br />
            <p>
              <small>Do not have an account?</small>{" "}
              <b
                style={{ color: "#2d88d4", cursor: "pointer" }}
                onClick={() => navigate("../../signup/1")}
              >
                Signup
              </b>
            </p>
            <br />
            <br />
          </form>
          <br />
        </div>
        <div className="signup-left"></div>
      </div>
    </>
  );
};

export default Login;
