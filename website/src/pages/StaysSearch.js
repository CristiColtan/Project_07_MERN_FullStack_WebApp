import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { FaMapMarkerAlt } from "react-icons/fa";

import WorldMap from "../images2/WorldMap.png";

import { Link, useNavigate } from "react-router-dom";

import "../styles/StaysSearch.css";

function StaysSearch() {
  const navigate = useNavigate();

  const [sideBarData, setSideBarData] = useState({
    searchTerm: "",
    mark: "all",
    pool: false,
    parking: false,
    wifi: false,
    location: "all-l",
    sort: "created_at",
    order: "desc",
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  console.log(sideBarData);
  console.log(listings);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const searchTermFromURL = urlParams.get("searchTerm");
    const markFromURL = urlParams.get("mark");
    const locationFromURL = urlParams.get("location");
    const parkingFromURL = urlParams.get("parking");
    const poolFromURL = urlParams.get("pool");
    const wifiFromURL = urlParams.get("wifi");
    const sortFromURL = urlParams.get("sort");
    const orderFromURL = urlParams.get("order");

    if (
      searchTermFromURL ||
      markFromURL ||
      locationFromURL ||
      parkingFromURL ||
      poolFromURL ||
      wifiFromURL ||
      sortFromURL ||
      orderFromURL
    ) {
      setSideBarData({
        searchTerm: searchTermFromURL || "",
        mark: markFromURL || "all",
        location: locationFromURL || "all-l",
        parking: parkingFromURL === "true" ? true : false,
        pool: poolFromURL === "true" ? true : false,
        wifi: wifiFromURL === "true" ? true : false,
        sort: sortFromURL || "created_at",
        order: orderFromURL || "desc",
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);

      const searchQuery = urlParams.toString();
      const res = await fetch(
        `http://localhost:8081/backend/listing/get?${searchQuery}`
      );

      const data = await res.json();

      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }

      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [window.location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "Excellent" ||
      e.target.id === "Wonderful"
    ) {
      setSideBarData({ ...sideBarData, mark: e.target.id });
    }

    if (
      e.target.id === "all-l" ||
      e.target.id === "Bucharest" ||
      e.target.id === "Brasov" ||
      e.target.id === "Sibiu"
    ) {
      setSideBarData({ ...sideBarData, location: e.target.id });
    }
    if (e.target.id === "searchTerm") {
      setSideBarData({ ...sideBarData, searchTerm: e.target.value });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "pool" ||
      e.target.id === "wifi"
    ) {
      setSideBarData({
        ...sideBarData,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";
      const order = e.target.value.split("_")[1] || "desc";

      setSideBarData({ ...sideBarData, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sideBarData.searchTerm);
    urlParams.set("mark", sideBarData.mark);
    urlParams.set("location", sideBarData.location);
    urlParams.set("parking", sideBarData.parking);
    urlParams.set("pool", sideBarData.pool);
    urlParams.set("wifi", sideBarData.wifi);
    urlParams.set("sort", sideBarData.sort);
    urlParams.set("order", sideBarData.order);

    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const startIndex = numberOfListings;
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();

    const res = await fetch(
      `http://localhost:8081/backend/listing/get?${searchQuery}`
    );

    const data = await res.json();

    if (data.length < 9) {
      setShowMore(false);
    }

    setListings([...listings, ...data]);
  };

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
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="searchTerm">
                <Form.Label style={{ fontSize: "larger" }}>
                  Search Terms:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  value={sideBarData.searchTerm}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  checked={sideBarData.mark === "all"}
                ></Form.Check>
                <Form.Check
                  inline
                  label="Excellent"
                  name="Excellent"
                  type="checkbox"
                  id="Excellent"
                  onChange={handleChange}
                  checked={sideBarData.mark === "Excellent"}
                ></Form.Check>
                <Form.Check
                  inline
                  label="Wonderful"
                  name="Wonderful"
                  type="checkbox"
                  id="Wonderful"
                  onChange={handleChange}
                  checked={sideBarData.mark === "Wonderful"}
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
                  onChange={handleChange}
                  checked={sideBarData.pool}
                ></Form.Check>
                <Form.Check
                  inline
                  label="Parking"
                  name="parking"
                  type="checkbox"
                  id="parking"
                  onChange={handleChange}
                  checked={sideBarData.parking}
                ></Form.Check>
                <Form.Check
                  inline
                  label="WIFI"
                  name="wifi"
                  type="checkbox"
                  id="wifi"
                  onChange={handleChange}
                  checked={sideBarData.wifi}
                ></Form.Check>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label style={{ fontSize: "larger" }}>City:</Form.Label>
                <br></br>
                <Form.Check
                  inline
                  label="Any"
                  name="all-l"
                  type="checkbox"
                  id="all-l"
                  onChange={handleChange}
                  checked={sideBarData.location === "all-l"}
                ></Form.Check>
                <Form.Check
                  inline
                  label="Bucharest"
                  name="Bucharest"
                  type="checkbox"
                  id="Bucharest"
                  onChange={handleChange}
                  checked={sideBarData.location === "Bucharest"}
                ></Form.Check>
                <Form.Check
                  inline
                  label="Sibiu"
                  name="Sibiu"
                  type="checkbox"
                  id="Sibiu"
                  onChange={handleChange}
                  checked={sideBarData.location === "Sibiu"}
                ></Form.Check>
                <Form.Check
                  inline
                  label="Brasov"
                  name="Brasov"
                  type="checkbox"
                  id="Brasov"
                  onChange={handleChange}
                  checked={sideBarData.location === "Brasov"}
                ></Form.Check>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label>Sort:</Form.Label>
                <br></br>
                <Form.Select
                  id="sort_order"
                  onChange={handleChange}
                  defaultValue={"created_at_desc"}
                >
                  <option value="price_desc">Price high to low</option>
                  <option value="price_asc">Price low to high</option>
                  <option value="createdAt_desc">Latest</option>
                  <option value="createdAt_asc">Oldest</option>
                </Form.Select>
              </Form.Group>
              <br></br>
              <Button style={{ allignSelf: "center" }} type="submit">
                Filter
              </Button>
            </Form>
          </Col>
          <Col>
            <h4>{listings.length} properties found</h4>

            {loading && (
              <div className="loading-p-search">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            {!loading &&
              listings &&
              listings.map((listing) => (
                <>
                  <Card key={listing._id}>
                    <Card.Body style={{ display: "flex" }}>
                      <div className="my-card-body">
                        <Link to={`/listing/${listing._id}`}>
                          <Card.Img
                            className="my-card-image"
                            variant="top"
                            src={listing.imageUrls[0]}
                          />
                        </Link>
                      </div>
                      <div>
                        <Row>
                          <Col>
                            <Link
                              to={`/listing/${listing._id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Card.Title>{listing.name}</Card.Title>
                            </Link>
                            <Card.Text>
                              <span className="my-card-text">
                                {listing.location} /{" "}
                                {listing.additional_description}
                              </span>
                              <br></br>
                              <p></p>
                              <p style={{ fontSize: "0.9em" }}>
                                {listing.description}
                              </p>
                            </Card.Text>
                          </Col>
                          <Col xs={3}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Col>
                                {listing.mark}
                                <br></br>
                                <span style={{ fontSize: "smaller" }}>
                                  {listing.reviews} *reviews
                                </span>
                              </Col>
                              <Col>
                                <span className="my-rating-search">
                                  {listing.rating}
                                </span>
                              </Col>
                            </div>
                            <br></br>

                            <Button
                              href={`/listing/${listing._id}`}
                              variant="primary"
                            >
                              Details
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                  <br></br>
                </>
              ))}
            {showMore && (
              <Button onClick={onShowMoreClick} variant="success">
                Show more
              </Button>
            )}
          </Col>
        </Row>
      </div>
      <br></br>
    </div>
  );
}

export default StaysSearch;
