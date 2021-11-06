import React from "react";
import "./banner.css";
import { Navbar } from "react-bootstrap";
function Banner() {
  return (
    <div className="banner">
      <Navbar className="navbar">
        <Navbar.Brand href="#home" className="navbarcontent">
          <img
            alt=""
            src="https://img.icons8.com/color/48/000000/double-door-open.png"
            width="30"
            height="30"
            className="d-inline-block align-top logo"
          />
          <span className="herotitle">
            <h2>Open Doors</h2>
          </span>
        </Navbar.Brand>
      </Navbar>
      <div className="banner_content">
        <h1 className="banner_title">Find All Remote Jobs </h1>
        <h2>Endless Opportunities !!</h2>
      </div>
      <div className="banner_fade"></div>
    </div>
  );
}

export default Banner;
