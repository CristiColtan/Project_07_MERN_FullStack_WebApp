import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import {
  FaMapMarkerAlt,
  FaBed,
  FaSwimmingPool,
  FaParking,
  FaWifi,
} from "react-icons/fa";

import Carousel from "react-bootstrap/Carousel";

import WorldMap from "../images2/WorldMap.png";

import "../styles/Listing.css";

export default function Listing() {
  const params = useParams();
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
              <Button>Book</Button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
