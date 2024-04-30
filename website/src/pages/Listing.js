import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  FaMapMarkerAlt,
  FaBed,
  FaSwimmingPool,
  FaParking,
  FaWifi,
} from "react-icons/fa";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

import WorldMap from "../images2/WorldMap.png";

import "../styles/Listing.css";

export default function Listing() {
  const params = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [errorB, setErrorB] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    userRef: currentUser._id,
    hotelName: "",
    reservationDate: value.toDate(),
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:8081/backend/listing/get/${params.listingID}`
        );

        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }

        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchListing();
  }, [params.listingID]);

  console.log(value);

  const handleChange = (newValue) => {
    setFormData({ ...formData, reservationDate: newValue.toDate() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorB(false);
      setLoadingB(false);

      const res = await fetch("http://localhost:8081/backend/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          ...formData,
          hotelName: listing.name,
          reservationDate: value.toDate(),
        }),
      });

      const data = await res.json();
      console.log(data);
      setLoadingB(false);
      if (data.success === false) {
        setErrorB(data.message);
      }
      navigate(`/profile`);
    } catch (error) {
      setErrorB(error.message);
      setLoadingB(false);
    }
  };

  console.log(formData);
  return (
    <div className="main-my-listing">
      {loading && (
        <div className="loading-p">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && (
        <div className="error-p">
          <h3>Something went wrong!</h3>
        </div>
      )}
      {listing && !loading && !error && (
        <div>
          <Row style={{ display: "flex" }}>
            <Col xs={3} className="spaced-column">
              <div className="map-container">
                {<FaMapMarkerAlt className="map-pin" />}
                <Button>Show on map</Button>
              </div>
              <br></br>
              <h5>Description:</h5>
              <p>{listing.description}</p>
              <h5>Mark:</h5>
              <p>{listing.mark}</p>
              <h5>Rating:</h5>
              <span className="my-rating">{listing.rating}</span>
            </Col>
            <Col xs={6}>
              <h3>{listing.name}</h3>
              <p>
                {<FaMapMarkerAlt />} {listing.address}
              </p>
              <Carousel style={{ height: "400px", width: "800px" }}>
                {listing.imageUrls &&
                  listing.imageUrls.length > 0 &&
                  listing.imageUrls.map((imageURL, index) => (
                    <Carousel.Item key={index}>
                      <img
                        style={{ height: "400px", width: "800px" }}
                        src={imageURL}
                      ></img>
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={3}>
              <div>
                <h5>Price:</h5>
                <p>{listing.price} RON</p>
              </div>
            </Col>
            <Col style={{ display: "flex", gap: "15px", marginLeft: "20px" }}>
              {" "}
              <div>
                {<FaBed />} {listing.rooms} Rooms{" "}
              </div>
              {listing.pool && <div>{<FaSwimmingPool />} Pool </div>}
              {listing.parking && <div>{<FaParking />} Parking</div>}
              {listing.wifi && <div>{<FaWifi />} WIFI</div>}
            </Col>
            <Col className="book-btn">
              Property of: {listing.userRef}
              <br></br>
              <Button onClick={() => handleShowModal()}>Book</Button>
            </Col>
          </Row>
        </div>
      )}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select the date for your reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            paddingLeft: "35%",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Select a date"
                value={value}
                onChange={(newValue) => {
                  setValue(dayjs(newValue));
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <br></br>
          <p>
            Thanks! We will contact you after!<br></br>
            {<BsHandThumbsUp />}
            {<BsHandThumbsDown />}
          </p>
          <br></br>
          <Button onClick={handleSubmit}>Book visit</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
