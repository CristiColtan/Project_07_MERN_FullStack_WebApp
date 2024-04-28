import React from "react";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import "../styles/Home.css";

function Home() {
  return (
    <div className="main_home">
      <div className="home_page">
        <br></br>
        <Row className="g-2">
          <Col md>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateRangePicker"]}>
                <DateRangePicker
                  localeText={{ start: "Check-in", end: "Check-out" }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Col>
          <Col md>
            <FloatingLabel
              className="padding_top"
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Where are you going</option>
                <option value="1">Bucharest</option>
                <option value="2">Sibiu</option>
                <option value="3">Constanta</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col md>
            <FloatingLabel
              className="padding_top"
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Number of persons</option>
                <option value="1">1 (One)</option>
                <option value="2">2 (Two)</option>
                <option value="3">3 (Three)</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col xs="auto">
            <Button href="/search" type="submit" className="mb-2 button_search">
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
