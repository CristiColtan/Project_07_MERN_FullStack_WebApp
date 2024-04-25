import React from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer_menu">
        <div className="footer_content">
          <br></br>
          <div className="footer_texts">
            <h4>Save time and money!</h4>
            <h5>Subscribe and we will send you the best offers!</h5>
          </div>
          <br></br>
          <div>
            <Row>
              <Col>
                <input
                  className="textbox"
                  placeholder="Enter your E-mail"
                ></input>
              </Col>
              <Col>
                <button className="button_subscribe" type="button">
                  Subscribe
                </button>
              </Col>
            </Row>
          </div>
          <br></br>
        </div>
      </div>
      <br></br>
      <div className="footer_content">
        <Button
          className="button_register_property_footer"
          variant="outline-success"
          href="/property"
        >
          Register your property!
        </Button>
        <br></br>
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19170.081075310667!2d26.07724432357878!3d44.41983553170202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff0b54881f97%3A0xae84d2f47f65a3a7!2sMilitary%20Technical%20Academy%20Ferdinand%20I!5e0!3m2!1sen!2sro!4v1712507892735!5m2!1sen!2sro"
            width="1200"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </div>
    </div>
  );
}
export default Footer;
