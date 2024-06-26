import { FcClock } from "react-icons/fc";
import { IoCallSharp } from "react-icons/io5";

import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="nav-heading">TELEMEDICINE</h1>
      <div className="navbar-flex">
        <div className="font-icon time-flex">
          <FcClock className="icon-size" />
          <div>
            <p>MON-FRD 08:00am - 20:00PM</p>
            <p>Saturday and Sunday Closed</p>
          </div>
        </div>
        <div className="font-icon2 time-flex ">
          <IoCallSharp className="icon-size" />
          <div>
            <p>+974535750000</p>
            <p>Contact Us For Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
