import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "../styles/AdminListings.css";

export default function AdminListings() {
  const [adminListings, setAdminListings] = useState([]);

  const handleShowAdminListings = async () => {
    try {
      const res = await fetch(
        "http://localhost:8081/backend/admin/get/properties"
      );

      const data = await res.json();
      setAdminListings(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleShowAdminListings();
  }, []);

  const handleDeleteAdminListing = async (listingID) => {
    try {
      const res = await fetch(
        `http://localhost:8081/backend/admin/delete/${listingID}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();
      console.log(data.message);

      setAdminListings((prev) =>
        prev.filter((listing) => listing._id !== listingID)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(adminListings);

  return (
    <div className="my-listings-main">
      <div>
        <h3>Admin - Listings</h3>
        <br></br>
        <br></br>
        <div className="container-list">
          {adminListings &&
            adminListings.length > 0 &&
            adminListings.map((listing) => (
              <div
                key={listing._id}
                className="card my-bg-light-subtle mt-4 my-card"
              >
                <img
                  src={listing.imageUrls[0]}
                  className="card-img-top my-card-img"
                  alt="..."
                />
                <div className="card-body my-card-body">
                  <div className="my-text-section">
                    <Link to={`/listing/${listing._id}`}>
                      <h5 className="my-card-title card-title">
                        {listing.name}
                      </h5>
                    </Link>
                    <p className="card-text">
                      {listing.additional_description}
                    </p>
                  </div>
                  <div className="my-cta-section">
                    <Button
                      onClick={() => handleDeleteAdminListing(listing._id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
