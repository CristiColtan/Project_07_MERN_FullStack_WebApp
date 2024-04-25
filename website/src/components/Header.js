import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useSelector } from "react-redux";

import "../styles/Header.css";

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="main">
      <div className="header">
        {["md"].map((expand) => (
          <Navbar key={"md"} expand="md" className="nav bg-body-tertiary mb-3">
            <Container fluid>
              <Navbar.Brand href="/">CC Booking</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    CC Booking
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact Service Client</Nav.Link>
                    <NavDropdown
                      title="Language"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#engleza">
                        English
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="Currency"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#ron">RON</NavDropdown.Item>
                    </NavDropdown>

                    {/*<Form.Select
                      className="w-auto"
                      aria-label="Default select example"
                    >
                      <option>Currency</option>
                      <option value="1">RON</option>
        </Form.Select>*/}
                  </Nav>
                  <Form className="d-flex">
                    <Button
                      href="/property"
                      className="button_register_property"
                      variant="outline-success"
                    >
                      Register your property!
                    </Button>

                    {currentUser ? (
                      <a href="/profile">
                        <img
                          style={{ maxWidth: "50px", borderRadius: "50%" }}
                          src={currentUser.avatar}
                          alt="profile"
                        ></img>
                      </a>
                    ) : (
                      <>
                        <Button
                          href="/register"
                          className="button_register"
                          variant="outline-success"
                        >
                          Register
                        </Button>

                        <Button
                          href="/login"
                          className="button_login"
                          variant="outline-success"
                        >
                          Login
                        </Button>
                      </>
                    )}
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </div>
  );
}

export default Header;
