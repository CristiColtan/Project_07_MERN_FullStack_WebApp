import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";

import {
  FaMapMarkerAlt,
  FaChair,
  FaSuitcase,
  FaSuitcaseRolling,
  FaCarAlt,
  FaPersonBooth,
  FaCarBattery,
  FaCarCrash,
  FaMobileAlt,
  FaFileImport,
} from "react-icons/fa";

import WorldMap from "../images2/WorldMap.png";

import { Link, useNavigate } from "react-router-dom";

import "../styles/CarRentals.css";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

export default function CarRentals() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleQuestionClick = () => {
    setShowModal(true);
  };

  const handleShowRentals = async () => {
    try {
      const res = await fetch("http://localhost:8081/backend/rental/get");
      const data = await res.json();
      setRentals(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleShowRentals();
  }, []);
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
            <h4>{rentals.length} cars found</h4>
            {loading && (
              <div className="loading-p-search">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            {!loading &&
              rentals &&
              rentals.map((rental) => (
                <>
                  <Card key={rental._id}>
                    <Card.Body style={{ display: "flex" }}>
                      <div className="my-card-body">
                        <Card.Img
                          className="my-card-image"
                          variant="top"
                          src={rental.photo[0]}
                        />
                      </div>
                      <div>
                        <Row>
                          <Card.Title>{rental.name}</Card.Title>
                          <Col>
                            <Card.Text>
                              <span style={{ fontSize: "larger" }}>
                                {<FaPersonBooth />} {rental.seats} seats
                                <br></br>
                                {<FaCarBattery />} {rental.transmission}
                                <br></br>
                              </span>
                            </Card.Text>
                          </Col>
                          <Col>
                            <span style={{ fontSize: "larger" }}>
                              {rental.large_bag && (
                                <div>{<FaSuitcase />} Large Bag</div>
                              )}
                              {rental.small_bag && (
                                <div>{<FaSuitcaseRolling />} Small Bag</div>
                              )}
                            </span>
                          </Col>
                          <Col xs={3}>
                            <div
                              style={{
                                justifyContent: "space-between",
                              }}
                            >
                              <span style={{ fontSize: "larger" }}>
                                {rental.price} RON/ 3 days
                              </span>
                              <br></br>
                              <br></br>
                              <Button onClick={() => handleQuestionClick()}>
                                Contact
                              </Button>
                            </div>
                            <br></br>
                          </Col>
                          <span style={{ fontSize: "larger" }}>
                            {rental.un_mileage && (
                              <div>
                                {<FaFileImport style={{ color: "green" }} />}{" "}
                                <span style={{ color: "green" }}>
                                  {" "}
                                  Unlimited Mileage!
                                </span>{" "}
                              </div>
                            )}
                          </span>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                  <div className="card-spacing"></div>
                </>
              ))}
          </Col>
        </Row>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showModal}
          onHide={handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            For renting this car please contact us at: rentacar@yahoo.com with
            your phone number and we will reach you!
            <br></br>
            <br></br>
            <p>
              Was this information helpful?<br></br>
              {<BsHandThumbsUp />}
              {<BsHandThumbsDown />}
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
