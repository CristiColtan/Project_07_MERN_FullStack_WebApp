import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import "../styles/AdminRentals.css";

export default function AdminRentals() {
  const [adminRentals, setAdminRentals] = useState([]);

  const handleShowAdminRentals = async () => {
    try {
      const res = await fetch(
        "http://localhost:8081/backend/admin/get/rentals"
      );

      const data = await res.json();
      setAdminRentals(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleShowAdminRentals();
  }, []);

  const handleDeleteAdminRental = async (rentalID) => {
    try {
      const res = await fetch(
        `http://localhost:8081/backend/admin/delete-rental/${rentalID}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      console.log(data.message);

      setAdminRentals((prev) =>
        prev.filter((rental) => rental._id !== rentalID)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(adminRentals);
  return (
    <div className="my-listings-main">
      <div>
        <h3>Admin - Rentals</h3>
        <br></br>
        <br></br>
        <div className="container-list">
          {adminRentals &&
            adminRentals.length > 0 &&
            adminRentals.map((rental) => (
              <div
                key={rental._id}
                className="card my-bg-light-subtle mt-4 my-card"
              >
                <img
                  src={rental.photo[0]}
                  className="card-img-top my-card-img"
                  alt="..."
                />
                <div className="card-body my-card-body">
                  <div className="my-text-section">
                    <h5 className="my-card-title card-title">{rental.name}</h5>

                    <p className="card-text">{rental.transmission}</p>
                  </div>
                  <div className="my-cta-section">
                    <Button
                      onClick={() => handleDeleteAdminRental(rental._id)}
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
