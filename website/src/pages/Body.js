import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../styles/Body.css";

import Dubrovnik from "../images/dubrovnik.jpg";
import Santorini from "../images/santorini.jpg";

import Bucuresti from "../images/BUC.jpg";
import Brasov from "../images/BRASOV.jpg";
import Cluj from "../images/CLUJ.jpg";
import Sibiu from "../images/SIBIU.jpg";
import Constanta from "../images/CONSTANTA2.jpg";

import Ro_flg from "../images/ro_flag.jpg";
import Cr_flg from "../images/croatia_flag.jpg";
import Gr_flg from "../images/greece_flag.jpg";

import SlideGallery from "../components/SlideGallery";
import Planner from "../components/Planner";
import Destinations from "../components/Destinations";
import DestinationsPills from "../components/DestinationsPills";

function Body() {
  return (
    <div className="main_body">
      <div className="body_page">
        <br></br>
        <br></br>
        <div className="texts_body">
          <h4>Popular destinations now</h4>
        </div>
        <br></br>
        <Row className="g-2">
          <Col md>
            <Card className="picture1 bg-dark text-white">
              <Card.Img height="300" src={Bucuresti} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>
                  <img
                    alt=""
                    src={Ro_flg}
                    width="40"
                    height="25"
                    className="d-inline-block align-top"
                  />{" "}
                  Bucuresti
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md>
            <Card className="picture1 bg-dark text-white">
              <Card.Img height="300" src={Santorini} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>
                  <img
                    alt=""
                    src={Gr_flg}
                    width="40"
                    height="25"
                    className="d-inline-block align-top"
                  />{" "}
                  Santorini
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row className="g-2">
          <Col md>
            <Card className="picture2 bg-dark text-white">
              <Card.Img height="200" src={Sibiu} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>
                  <img
                    alt=""
                    src={Ro_flg}
                    width="40"
                    height="25"
                    className="d-inline-block align-top"
                  />{" "}
                  Sibiu
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md>
            <Card className="picture2 bg-dark text-white">
              <Card.Img height="200" src={Dubrovnik} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>
                  <img
                    alt=""
                    src={Cr_flg}
                    width="40"
                    height="25"
                    className="d-inline-block align-top"
                  />{" "}
                  Dubrovnik
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md>
            <Card className="picture2 bg-dark text-white">
              <Card.Img height="200" src={Cluj} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>
                  <img
                    alt=""
                    src={Ro_flg}
                    width="40"
                    height="25"
                    className="d-inline-block align-top"
                  />{" "}
                  Cluj
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <div className="texts_body">
          <h4>Explore Romania!</h4>
        </div>
        <br></br>
        <SlideGallery></SlideGallery>
        <br></br>
        <div className="texts_body">
          <h4>Fast and easy trip planner</h4>
          <h5>Choose a theme and discover the top destinations in Romania</h5>
          <br></br>
        </div>
        <Planner></Planner>
        <br></br>
        <div className="texts_body">
          <h4>Stay at our top unique properties</h4>
          <h5>Homes guests love</h5>
          <br></br>
        </div>
        <Destinations></Destinations>
        <div className="texts_body">
          <h4>Destinations we like</h4>
        </div>
        <DestinationsPills></DestinationsPills>
        <br></br>
      </div>
    </div>
  );
}

export default Body;
