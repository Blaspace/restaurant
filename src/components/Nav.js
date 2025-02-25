import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-con">
      <div className="nav">
        <h1>Order</h1>
        <ul>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "orange",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "black",
                    textDecoration: "none",
                  };
            }}
            to={"/"}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "orange",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "black",
                    textDecoration: "none",
                  };
            }}
            to={"/menue"}
          >
            <li>Browse Menue</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "orange",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "black",
                    textDecoration: "none",
                  };
            }}
            to={"/offers"}
          >
            <li>Special Offers</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "orange",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "black",
                    textDecoration: "none",
                  };
            }}
            to={"/resturant"}
          >
            <li>Resturants</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "orange",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "black",
                    textDecoration: "none",
                  };
            }}
            to={"/order"}
          >
            <li>Track Order</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "orange",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "black",
                    textDecoration: "none",
                  };
            }}
            to={"/login"}
          >
            <button>Login/Signup</button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
