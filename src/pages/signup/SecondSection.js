/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiPizza, CiBurger, CiFries, CiCoffeeCup } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import Popup from "../../components/PopUp"

const SecondSection = () => {
  const [location, setLocation] = useState();
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleNext = () => {
    if (location && password && conPassword) {
      if (password === conPassword) {
              const info = localStorage.getItem('signupInfo')
          if(info && info !== 'undefined'){
            e.target.innerText = "Loading..."
            e.target.style.backgroundColor = "lightgrey"
            e.target.style.color = "black"

              fetch(`${process.env.REACT_APP_APIURL}/school/add`,{
                  method: 'POST',
                  headers:{
                      "Content-Type":"application/json"
                  },
                  body: JSON.stringify({...JSON.parse(info), location, password})
              })
              .then((res)=>{
                  if(res.ok){
                      return res.json()
                  }else if(res.status === 409){
                      setMessage('this user already exist')
                  }else{
                      setMessage('something went wrong')
                  }
              })
              .then((data)=>{
                  console.log(data);
                  localStorage.setItem('token', data.accessToken)
                  navigate('../../')
              })
              .catch(err=>console.log(err))
              .finally(()=>{
                  e.target.innerText = "Signup"
                  e.target.style.backgroundColor = "#fc8a06"
                  e.target.style.color = "#ffffff"
              })
            }else{
              navigate('../../signup/1')
            }
      } else {
        setMessage("Your password must be thesame as your confirm password");
      }
    } else {
      setMessage("All fields are required");
    }
  };
  return (
    <>
    <Popup message={message} setMessage={setMessage}/>
      <div className="signup-right">
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
          style={{ position: "absolute", left: "230px", top: "80px" }}
        />
        <h1>Welcome, create your account</h1>
        <br />
        <br />
        <br />
        <form onSubmit={(e) => e.preventDefault()}>
          <br />
          <br />
          <p>
            It is our great pleasure to have
            <br /> you on board
          </p>
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your location"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Choose a password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            required
            onChange={(e) => setConPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleNext}>Next</button>
          <br />
          <p>
            <small>Already have an account?</small>{" "}
            <b
              style={{ color: "#2d88d4", cursor: "pointer" }}
              onClick={() => navigate("../../login")}
            >
              Login
            </b>
          </p>
          <br />
          <br />
        </form>
        <br />
      </div>
      <div className="signup-left"></div>
    </>
  );
};
export default SecondSection;
