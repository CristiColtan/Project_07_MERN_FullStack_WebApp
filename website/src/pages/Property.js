import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import WorldMap from "../images2/WorldMap.png";
import GreenCheck from "../images2/GreenCheck.png";
import PropertyImg1 from "../images2/RegisterProperty1.png";
import PropertyImg2 from "../images2/RegisterProperty2.png";
import ArrowRight from "../images2/ArrowRight.png";

import Icon1 from "../images2/Icon1.png";
import Icon2 from "../images2/Icon2.png";
import Icon3 from "../images2/Icon3.png";
import Icon4 from "../images2/Icon4.png";
import Icon5 from "../images2/Icon5.png";
import Icon6 from "../images2/Icon6.png";

import "../styles/Property.css";

function Property() {
  return (
    <div className="main_property">
      <div>
        <br></br>
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <div>
                <h1 className="hstyle">Register</h1>
                <h1 className="hstyle">Your Property</h1>
                <h1 className="hstyle">On CC Booking</h1>
                <br></br>
                <h3 className="pstyle">
                  Whether hosting is a hobby or your main business, list your
                  vacation property on CC Booking to reach travelers from around
                  the world
                </h3>
              </div>
            </Col>
            <Col style={{ paddingLeft: "150px" }}>
              <div>
                <Card>
                  <Card.Body>
                    <Card.Title>Earn more with consistent bookings</Card.Title>
                    <Card.Text>
                      <img
                        alt=""
                        src={ArrowRight}
                        width="30"
                        height="30"
                        className="d-inline-block align-center"
                      />{" "}
                      45% of partners receive their first booking within a week
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <img
                        alt=""
                        src={ArrowRight}
                        width="30"
                        height="30"
                        className="d-inline-block align-center"
                      />{" "}
                      Over 1.1 billion vacation property guests since 2010
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img
                        alt=""
                        src={ArrowRight}
                        width="30"
                        height="30"
                        className="d-inline-block align-center"
                      />{" "}
                      Full control over your property and finances
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img
                        alt=""
                        src={ArrowRight}
                        width="30"
                        height="30"
                        className="d-inline-block align-center"
                      />{" "}
                      Registration is free and takes a little time
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Button href="/create-listing">
                      Register your property!
                    </Button>{" "}
                    <Button href="/my-listings">Check your properties!</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="container_section">
            <br></br>
            <h2 className="hstyle">Reach a unique customer base worldwide</h2>
            <br></br>
            <Row xs={1} md={3}>
              <Col>
                <h1>2/3</h1>
                of guests at vacation properties come back to book with us again
              </Col>
              <Col>
                <h1>48%</h1>
                of nights booked through CC Booking in 2022 were international
                stays
              </Col>
              <Col>
                <h1>33%</h1>
                of vacation property customers are people who tend to spend more
                on each booking
              </Col>
            </Row>

            <br></br>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Row xs={1} md={2}>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Get quality bookings fast</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <img
                      alt=""
                      src={GreenCheck}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    Your score from reviews on other travel websites are
                    converted and displayed on your property page until you
                    receive your first review from a CC Booking guest
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      alt=""
                      src={GreenCheck}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    Stand out in search results with the 'New on CC Booking' tag
                    displayed next to your property.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      alt=""
                      src={GreenCheck}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    Our listing strengths checklist helps you set up your
                    property to attract more guests
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      alt=""
                      src={GreenCheck}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    Your property will be discovered faster with our innovative
                    Quality Assessment System
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <img
                alt=""
                height="350"
                width="550"
                src={PropertyImg1}
                className="d-inline-block align-center imagine1"
              />{" "}
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row-background">
            <Row xs={1} md={2}>
              <Col>
                <img
                  alt=""
                  height="320"
                  width=""
                  src={PropertyImg2}
                  className="d-inline-block align-center imagine1"
                />{" "}
              </Col>
              <Col>
                <br></br>
                <br></br>

                <Card>
                  <Card.Body>
                    <Card.Title>
                      Maintain full control over your property and finances
                    </Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <img
                        alt=""
                        src={GreenCheck}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />{" "}
                      For added security, we'll facilitate claims for damages on
                      your behalf if you suffer damages of up to €/$/£500
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img
                        alt=""
                        src={GreenCheck}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />{" "}
                      Get protection against claims from guests and neighbors up
                      to €/£/$1,000,000 per booking
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row-bckr">
          <h3>Administrate your property easily!</h3>
          <br></br>

          <Container>
            <Row xs={1} md={2}>
              <Col>
                <img alt="" src={Icon1} className="d-inline-block align-top" />{" "}
                <br></br>
                <br></br>
                <h4>Fast registration!</h4>
                <p>Configurate your property page in 5 minute</p>
              </Col>
              <Col>
                <img alt="" src={Icon2} className="d-inline-block align-top" />{" "}
                <br></br>
                <br></br>
                <h4>Easy property import!</h4>
                <p>
                  Quickly import your property information from other travel
                  websites
                </p>
              </Col>
            </Row>
            <Row xs={1} md={2}>
              <Col>
                <img alt="" src={Icon3} className="d-inline-block align-top" />{" "}
                <br></br>
                <br></br>
                <h4>Solid support!</h4>
                <p>
                  {" "}
                  We provide customer support in 45 languages and make Pulse,
                  our booking management app, available to our partners
                </p>
              </Col>
              <Col>
                <img alt="" src={Icon4} className="d-inline-block align-top" />{" "}
                <br></br>
                <br></br>
                <h4>Safe development!</h4>
                <p>
                  Benefit from guaranteed payments and fraud protection with
                  Online Payments through CC Booking
                </p>
              </Col>
            </Row>
            <Row xs={1} md={2}>
              <Col>
                <img alt="" src={Icon5} className="d-inline-block align-top" />{" "}
                <br></br>
                <br></br>
                <h4>Simplified activity!</h4>
                <p>
                  Manage your property efficiently by working with one of the
                  600+ trusted connectivity providers we recommend
                </p>
              </Col>
              <Col>
                <img alt="" src={Icon6} className="d-inline-block align-top" />{" "}
                <br></br>
                <br></br>
                <h4>Transparent commission!</h4>
                <p>
                  Understand what and who you're paying with transparent
                  commission{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "blue",
                      color: "blue",
                    }}
                  >
                    here
                  </span>
                </p>
              </Col>
            </Row>
          </Container>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Property;
