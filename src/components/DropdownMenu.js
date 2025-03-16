import React from "react";
import { NavLink } from "react-router-dom";
import {IoMdClose} from "react-icons/io"

function DropdownMenu({ drop, setDrop }) {
  return (
    <div className="dropdown" style={{ height: drop ? "100vh" : "0" }}>
      <ul>
         <IoMdClose size={40} color="#ffffff" style={{ position: "absolute",
            top: "55px",
            right: "10px",}} onClick={()=>setDrop(false)}/>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "#ffffff",
                  textDecoration: "none",
                }
              : {
                  color: "#ffffff",
                  textDecoration: "none",
                };
          }}
          to={"/"}
        >
          <li onClick={() => setDrop(false)}>Home</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "#ffffff",
                  textDecoration: "none",
                }
              : {
                  color: "#ffffff",
                  textDecoration: "none",
                };
          }}
          to={"/menu/all"}
        >
          <li onClick={() => setDrop(false)}>Browse Menu</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "#ffffff",
                  textDecoration: "none",
                }
              : {
                  color: "#ffffff",
                  textDecoration: "none",
                };
          }}
          to={"/offers"}
        >
          <li onClick={() => setDrop(false)}>Special Offers</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "#ffffff",
                  textDecoration: "none",
                }
              : {
                  color: "#ffffff",
                  textDecoration: "none",
                };
          }}
          to={"/order"}
        >
          <li onClick={() => setDrop(false)}>Track Order</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "#ffffff",
                  textDecoration: "none",
                }
              : {
                  color: "#ffffff",
                  textDecoration: "none",
                };
          }}
          to={"/login"}
        >
          <button onClick={() => setDrop(false)}>Login/Signup</button>
        </NavLink>
      </ul>
    </div>
  );
}

export default DropdownMenu;
