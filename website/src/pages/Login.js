import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OAuth from "../components/OAuth.js";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

import "../styles/Login.css";

function Login() {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      try {
        dispatch(signInStart());

        const res = await fetch("http://localhost:8081/backend/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success === false) {
          dispatch(signInFailure(data.message));
          return;
        }

        dispatch(signInSuccess(data));
        console.log(data);
        setShowAlert(true);
        navigate("/");
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    }

    setValidated(true);
  };

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formData);

  return (
    <div className="main_login">
      <div className="login_page">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group md="3" controlId="username">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group md="3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a Password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button disabled={loading} type="submit">
            {loading ? "Loading..." : "Login"}
          </Button>
        </Form>
        <br></br>
        <OAuth></OAuth>
        <br></br>
        <br></br>
        {showAlert && (
          <div
            style={{ maxWidth: "270px" }}
            className="alert alert-success"
            role="alert"
          >
            You' ve logged in successfuly!
          </div>
        )}
        {error && (
          <div
            style={{ maxWidth: "270px" }}
            className="alert alert-danger"
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
