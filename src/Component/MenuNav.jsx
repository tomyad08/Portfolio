import React from "react";

const MenuNav = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end py-2">
        <div
          className="px-2 py-3 border border-0 rounded-5"
          style={{
            fontfamily: "'Roboto', sans-serif",
            fontSize: "20px",
            color: "white",
          }}
        >
          <a href="#banner" style={{ textDecoration: "none", color: "white" }}>
            <span
              className="py-2 px-3 mx-1 border border-0 rounded-5"
              id="menu"
            >
              About Me
            </span>
          </a>
          <a href="#working" style={{ textDecoration: "none", color: "white" }}>
            <span
              className="py-2 px-3 mx-1 border border-0 rounded-5"
              id="menu"
            >
              Working
            </span>
          </a>
          <a href="#project" style={{ textDecoration: "none", color: "white" }}>
            <span
              className="py-2 px-3 mx-1 border border-0 rounded-5"
              id="menu"
            >
              Project
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default MenuNav;
