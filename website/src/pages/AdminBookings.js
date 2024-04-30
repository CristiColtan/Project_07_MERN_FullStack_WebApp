import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import "../styles/AdminBookings.css";

export default function AdminBookings() {
  const [adminBookings, setAdminBookings] = useState([]);

  const handleShowAdminBookings = async () => {
    try {
      const res = await fetch(
        "http://localhost:8081/backend/admin/get/bookings"
      );

      const data = await res.json();
      setAdminBookings(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleShowAdminBookings();
  }, []);

  const handleDeleteAdminBookings = async (bookingID) => {
    try {
      const res = await fetch(
        `http://localhost:8081/backend/admin/delete-booking/${bookingID}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      console.log(data.message);

      setAdminBookings((prev) =>
        prev.filter((booking) => booking._id !== bookingID)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(adminBookings);

  return (
    <div className="my-listings-main">
      <div>
        <h3>Admin - Bookings</h3>
        <br></br>
        <br></br>
        <div className="container-list">
          {adminBookings &&
            adminBookings.length > 0 &&
            adminBookings.map((booking) => (
              <div
                key={booking._id}
                className="card my-bg-light-subtle mt-4 my-card"
              >
                <div className="card-body my-card-body">
                  <div className="my-text-section">
                    <h5 className="my-card-title card-title">
                      Booking ID: {booking._id}
                    </h5>

                    <p className="card-text">Client: {booking.userRef}</p>
                    <p className="card-text">{booking.hotelName}</p>

                    <p className="card-text">{booking.reservationDate}</p>
                  </div>
                  <div className="my-cta-section">
                    <Button
                      onClick={() => handleDeleteAdminBookings(booking._id)}
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
