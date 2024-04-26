import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { FaHome, FaPlane, FaShieldAlt, FaEllipsisH } from "react-icons/fa";

import Bed from "../images/bed.png";
import Plane from "../images/plane.png";

import "../styles/Header.css";

function HeaderLow() {
  return (
    <div className="main">
      <div className="header">
        <br></br>
        <div className="d-flex nav">
          <Navbar className="bg-body-tertiary navbars rounded-pill">
            <Container>
              <Navbar.Brand href="/">
                {/*<img
                  alt=""
                  src={Bed}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
  />{" "}*/}
                {<FaHome />} Stays
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar className="bg-body-tertiary navbars rounded-pill">
            <Container className="d-flex justify-content-between w-100">
              <Navbar.Brand href="#home" className="mr-auto">
                {/*<img
                  alt=""
                  src={Plane}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
/>{" "}*/}
                {<FaPlane />} Flights
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        <br></br>
        <h2 className="texts nav">Find your next stay...</h2>
        <h3 className="texts nav">Find deals on hotels, housing and more...</h3>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default HeaderLow;