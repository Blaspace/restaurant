import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import DropdownMenu from "./DropdownMenu";

function Nav() {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <DropdownMenu const drop={drop} setDrop={setDrop} />
      <div className="nav-con" id="nav">
        <div className="nav">
          <span className="hamburger" onClick={() => setDrop(true)}>
            <MdOutlineMenu size={30} />
          </span>
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
              to={"/menu/all"}
            >
              <li>Browse Menu</li>
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
    </>
  );
}

export default Nav;
