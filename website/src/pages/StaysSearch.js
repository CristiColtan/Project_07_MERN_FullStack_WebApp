import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

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
            <br></br>
            <Form>
              <Form.Group className="mb-3" controlId="searchTerm">
                <Form.Label style={{ fontSize: "larger" }}>
                  Search Terms:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "larger" }}>
                  Review Score:
                </Form.Label>
                <br></br>
                <Form.Check
                  inline
                  label="Any"
                  name="all"
                  type="checkbox"
                  id="all"
                ></Form.Check>
                <Form.Check
                  inline
                  label="Excellent"
                  name="exc"
                  type="checkbox"
                  id="exc"
                ></Form.Check>
                <Form.Check
                  inline
                  label="Wonderful"
                  name="won"
                  type="checkbox"
                  id="won"
                ></Form.Check>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label style={{ fontSize: "larger" }}>
                  Facilities:
                </Form.Label>
                <br></br>
                <Form.Check
                  inline
                  label="Pool"
                  name="pool"
                  type="checkbox"
                  id="pool"
                ></Form.Check>
                <Form.Check
                  inline
                  label="Parking"
                  name="parking"
                  type="checkbox"
                  id="parking"
                ></Form.Check>
                <Form.Check
                  inline
                  label="WIFI"
                  name="wifi"
                  type="checkbox"
                  id="wifi"
                ></Form.Check>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label style={{ fontSize: "larger" }}>City:</Form.Label>
                <br></br>
                <Form.Check
                  inline
                  label="Bucharest"
                  name="buc"
                  type="checkbox"
                  id="buc"
                ></Form.Check>
                <Form.Check
                  inline
                  label="Sibiu"
                  name="sib"
                  type="checkbox"
                  id="sib"
                ></Form.Check>
                <Form.Check
                  inline
                  label="Brasov"
                  name="bra"
                  type="checkbox"
                  id="bra"
                ></Form.Check>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label>Sort:</Form.Label>
                <br></br>
                <Form.Select id="sort_order">
                  <option>Price high to low</option>
                  <option>Price low to high</option>
                  <option>Latest</option>
                  <option>Oldest</option>
                </Form.Select>
              </Form.Group>
              <br></br>
              <Button style={{ allignSelf: "center" }}>Filter</Button>
            </Form>
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
                      <Button variant="primary">Details</Button>
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
