import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import DropdownMenu from "./DropdownMenu";
import ProfileDropdown from "./ProfileDropdown";

function Nav() {
  const [drop, setDrop] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);


  return (
    <>
      <DropdownMenu drop={drop} setDrop={setDrop} />
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
            {localStorage.getItem('token') ? (
              <>
              <IoPersonCircle size={40} color="#03081f" onClick={()=>setProfileDrop(!profileDrop)}/>
              <ProfileDropdown drop={profileDrop} setDrop={setProfileDrop}/>
              </>
            ) : (
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
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
