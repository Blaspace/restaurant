import React from 'react'
import { NavLink } from 'react-router-dom';

function ProfileDropdown({ drop }) {
  return (
    <div className='profile-dropdown' style={{height: drop ? '200px' : '0'}}>
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
          <li>Notification</li>
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
             <p>Logout</p>
          </NavLink>
        
      </ul>
    </div>
  )
}

export default ProfileDropdown
