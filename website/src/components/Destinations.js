import React from "react";

import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../styles/Destinations.css";

import HotelIntercontinental from "../images2/hotel_intercontinental2.jpg";
import HotelSinaia from "../images2/hotel_sinaia2.jpg";
import HotelSheraton from "../images2/hotel_sheraton2.jpg";
import HotelRaddisonBlu from "../images2/hotel_raddison_blu2.jpg";

import Imagee from "../images/image_green_replaced.png";

function Destinations() {
  return (
    <div>
      <div>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-center align-items-center"
          gap={3}
        >
          <Card>
            <Card.Img variant="top" src={HotelSinaia} />
            <Card.Body>
              <Card.Subtitle>Hotel International</Card.Subtitle>
              <Card.Text>
                Sinaia, Romania
                <div>
                  <span className="circle">9.7</span>
                  <span className="reviews"> *653 reviews</span>
                </div>
                <span className="text">Starting from </span>
                <span className="price">240 RON</span>
              </Card.Text>
              <Button className="" disabled variant="primary">
                Offer unavailable
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={HotelIntercontinental} />
            <Card.Body>
              <Card.Subtitle>Hotel Intercontinental</Card.Subtitle>
              <Card.Text>
                Sector 6, Bucuresti, Romania
                <div>
                  <span className="circle">9.3</span>
                  <span className="reviews"> *1379 reviews</span>
                </div>
                <span className="text">Starting from </span>
                <span className="price">350 RON</span>
              </Card.Text>
              <Button className="" disabled variant="primary">
                Offer unavailable
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={HotelRaddisonBlu} />
            <Card.Body>
              <Card.Subtitle>Hotel Raddison Blu</Card.Subtitle>
              <Card.Text>
                Sector 3, Bucuresti, Romania
                <div>
                  <span className="circle">9.1</span>
                  <span className="reviews"> *447 reviews</span>
                </div>
                <span className="text">Starting from </span>
                <span className="price">425 RON</span>
              </Card.Text>
              <Button className="" disabled variant="primary">
                Offer unavailable
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={HotelSheraton} />
            <Card.Body>
              <Card.Subtitle>Bucuresti</Card.Subtitle>
              <Card.Text>
                Sector 1, Bucuresti, Romania
                <div>
                  <span className="circle">8.9</span>
                  <span className="reviews"> *214 reviews</span>
                </div>
                <span className="text">Starting from </span>
                <span className="price">330 RON</span>
              </Card.Text>
              <Button className="" disabled variant="primary">
                Offer unavailable
              </Button>
            </Card.Body>
          </Card>
        </Stack>
        <br></br>
        <Card className="bg-dark text-white">
          <Card.Img src={Imagee} alt="Card image" />
        </Card>
        <br></br>
      </div>
    </div>
  );
}

export default Destinations;
