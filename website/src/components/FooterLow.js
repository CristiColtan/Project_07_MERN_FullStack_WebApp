import React from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../styles/Footer.css";

function FooterLow() {
  return (
    <div>
      <div className="linie">_</div>
      <br></br>
      <p className="copyright">
        Copyright © 1996-2024 CCBooking™. All rights reserved.
      </p>
      <p className="copyright2">
        CCBooking is part of Booking Holdings Inc., the world leader in online
        travel and related services.
      </p>
    </div>
  );
}
export default FooterLow;
