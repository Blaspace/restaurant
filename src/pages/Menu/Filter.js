import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Filter({ setFilter }) {
  const navigate = useNavigate();
  return (
    <div className="menu-filter-con">
      <div className="menu-filter">
        <ul>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/all"}
          >
            <li>All</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/burger"}
          >
            <li>Burger</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/fries"}
          >
            <li>Fries</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/salad"}
          >
            <li>Salads</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/drink"}
          >
            <li>Cold drink</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/pizza"}
          >
            <li>Pizza</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/pasta"}
          >
            <li>Pasta</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/breakfast"}
          >
            <li>Breakfast</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "20px",
                    textDecoration: "none",
                  }
                : {
                    color: "#ffffff",
                    textDecoration: "none",
                  };
            }}
            to={"../../menu/soup"}
          >
            <li>Soup</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
