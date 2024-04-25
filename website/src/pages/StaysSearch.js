import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { FaMapMarkerAlt } from "react-icons/fa";

import WorldMap from "../images2/WorldMap.png";

import "../styles/StaysSearch.css";

function StaysSearch() {
  return (
    <div className="main-stays-search-page">
      <div>
        <Row>
          <Col xs={3} className="spaced-column">
            <div className="map-container">
              {<FaMapMarkerAlt className="map-pin" />}
              <Button>Show on map</Button>
            </div>
          </Col>
          <Col>
            <h4>Bucharest: 1,876 properties found</h4>

            <Card>
              <Card.Body style={{ display: "flex" }}>
                <div className="my-card-body">
                  <Card.Img
                    className="my-card-image"
                    variant="top"
                    src={WorldMap}
                  />
                </div>
                <div>
                  <Row>
                    <Col>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        <span className="my-card-text">
                          Brasov / 1.8km from Center
                        </span>
                        <br></br>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Col>
                    <Col xs={3}>
                      <Button variant="primary">Book</Button>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <br></br>
    </div>
  );
}

export default StaysSearch;
