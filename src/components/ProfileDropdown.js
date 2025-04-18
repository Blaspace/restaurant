import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ProfileDropdown({ drop, setDrop }) {
  const [height, setHeight] = useState("0")

  useEffect(()=>{
    drop ? setHeight("200px") : setHeight("0")
  },[drop])
  return (
    <div className="profile-dropdown" style={{ height }}>
      <ul>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "#000",
                  textDecoration: "none",
                }
              : {
                  color: "#000",
                  textDecoration: "none",
                };
          }}
          to={"/"}
        >
          <li onClick={()=>setDrop(false)}>Notification</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "red",
                  textDecoration: "none",
                }
              : {
                  color: "red",
                  textDecoration: "none",
                };
          }}
          to={"/login"}
        >
          <li onClick={()=>setDrop(false)}>Logout</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default ProfileDropdown;
