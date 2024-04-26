import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/MyListings.css";

export default function MyListings() {
  const [showListingsError, setShowListingsError] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [userListings, setUserListings] = useState([]);

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(
        `http://localhost:8081/backend/user/listings/${currentUser._id}`,
        { credentials: "include" }
      );

      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  useEffect(() => {
    handleShowListings();
  }, []);

  const handleDeleteListing = async (listingID) => {
    try {
      const res = await fetch(
        `http://localhost:8081/backend/listing/delete/${listingID}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingID)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(userListings);

  return (
    <div className="my-listings-main">
      <div>
        <h3>My Listings</h3>
        Manage your CC Booking listings
        <br></br>
        <br></br>
        <div className="container-list">
          {userListings &&
            userListings.length > 0 &&
            userListings.map((listing) => (
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
                    <div>
                      <Link to={`/edit-listing/${listing._id}`}>
                        <Button>Edit</Button>
                      </Link>
                    </div>
                    <Button
                      onClick={() => handleDeleteListing(listing._id)}
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
