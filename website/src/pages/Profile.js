import React, { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import ListGroup from "react-bootstrap/ListGroup";

import { FiSettings } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import { useRef, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { ref } from "firebase/storage";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from "../redux/user/userSlice.js";

import "../styles/Profile.css";

function Profile() {
  const [showMessage, setShowMessage] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  const getQuestion = () => {
    return selectedQuestion;
  };
  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setShowModal(true);
  };

  const getAnswerForQuestion = (question) => {
    switch (question) {
      case "Edit your First Name":
        return (
          <Form.Group className="mb-3" controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={currentUser.first_name}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
        );
      case "Edit your Last Name":
        return (
          <Form.Group className="mb-3" controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={currentUser.last_name}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
        );
      case "Edit your Username":
        return (
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder={currentUser.username}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
        );
      case "Edit your Email":
        return (
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder={currentUser.email}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
        );
      case "Edit your Gender":
        return (
          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder={currentUser.gender}
              autoFocus
            />
          </Form.Group>
        );
      case "Edit your City":
        return (
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder={currentUser.city}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
        );
      case "Edit your State":
        return (
          <Form.Group className="mb-3" controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder={currentUser.state}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
        );
      case "Edit your Zip":
        return (
          <Form.Group className="mb-3" controlId="zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder={currentUser.zip}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
        );
      default:
        return <p>Unknown</p>;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const { currentUser, loading, errror } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const [userBookings, setUserBookings] = useState([]);
  const handleShowBookings = async () => {
    try {
      const res = await fetch(
        `http://localhost:8081/backend/user/bookings/${currentUser._id}`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();
      setUserBookings(data);
    } catch (error) {}
  };

  console.log(filePercentage);
  console.log(file);
  console.log(formData);
  console.log(userBookings);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  useEffect(() => {
    handleShowBookings();
  }, []);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      (fileUploadError) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());

      const res = await fetch(
        `http://localhost:8081/backend/user/update/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.succes === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setShowMessage(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());

      const res = await fetch(
        `http://localhost:8081/backend/user/delete/${currentUser._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("http://localhost:8081/backend/auth/signout");

      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }

      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };

  const handleDeleteBooking = async (bookingID) => {
    try {
      const res = await fetch(
        `http://localhost:8081/backend/booking/delete/${bookingID}`,
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

      setUserBookings((prev) =>
        prev.filter((booking) => booking._id !== bookingID)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="main-profile">
      <div>
        <h3>Account Settings</h3>
        Manage your CC Booking experience
        <br></br>
        <br></br>
        <Tabs
          defaultActiveKey="Settings"
          id="justify-tab-example"
          className="mb-4"
          justify
        >
          <Tab
            eventKey="Settings"
            title={
              <span>
                <FiSettings /> Settings
              </span>
            }
          >
            <Tab.Container id="left-tabs-example" defaultActiveKey="5.1">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="5.1">Personal details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5.2">Preferences</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5.3">Security</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5.4">Payment details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5.5">Privacy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5.6">Email Notifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5.7">Other travelers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5.9">My bookings</Nav.Link>
                    </Nav.Item>
                    {currentUser.isadmin === "Yes" && (
                      <Nav.Item>
                        <Nav.Link eventKey="5.8">Admin Panel</Nav.Link>
                      </Nav.Item>
                    )}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="5.1">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Personal details</h3>
                          Update your info and find out how it's used.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <input
                            onChange={(e) => setFile(e.target.files[0])}
                            type="file"
                            ref={fileRef}
                            hidden
                            accept="image/*"
                          ></input>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col className="column-3-style">
                              <img
                                onClick={() => fileRef.current.click()}
                                src={formData.avatar || currentUser.avatar}
                                style={{
                                  maxWidth: "75px",
                                  borderRadius: "50%",
                                }}
                                alt="profile pic"
                              ></img>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>First Name: </Col>
                            <Col>{currentUser.first_name}</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button
                                onClick={() =>
                                  handleQuestionClick("Edit your First Name")
                                }
                              >
                                Edit
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Last Name: </Col>
                            <Col>{currentUser.last_name}</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button
                                onClick={() =>
                                  handleQuestionClick("Edit your Last Name")
                                }
                              >
                                Edit
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Username: </Col>
                            <Col>{currentUser.username}</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button
                                onClick={() =>
                                  handleQuestionClick("Edit your Username")
                                }
                              >
                                Edit
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Email:</Col>
                            <Col>
                              {currentUser.email}
                              <br></br>This is the email address you use to sign
                              in. It's also where we send your booking
                              confirmations.
                            </Col>
                            <Col xs={3} className="column-3-style">
                              <Button
                                onClick={() =>
                                  handleQuestionClick("Edit your Email")
                                }
                              >
                                Edit
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Gender:</Col>
                            <Col>{currentUser.gender}</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button
                                onClick={() =>
                                  handleQuestionClick("Edit your Gender")
                                }
                              >
                                Edit
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>City: </Col>
                            <Col>{currentUser.city}</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button
                                onClick={() =>
                                  handleQuestionClick("Edit your City")
                                }
                              >
                                Edit
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>State: </Col>
                            <Col>{currentUser.state}</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button
                                onClick={() =>
                                  handleQuestionClick("Edit your State")
                                }
                              >
                                Edit
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Zip: </Col>
                            <Col>{currentUser.zip}</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button
                                onClick={() =>
                                  handleQuestionClick("Edit your Zip")
                                }
                              >
                                Edit
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <br></br>
                          <div className="column-3-style">
                            <Button
                              disabled={loading}
                              onClick={handleSubmit}
                              type="submit"
                            >
                              {loading ? "Loading..." : "Update your profile"}
                            </Button>
                          </div>
                          <div>
                            {showMessage && (
                              <p style={{ color: "green" }}>
                                {errror ? errror : "User updated successfully!"}
                              </p>
                            )}
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                    <Tab.Pane eventKey="5.2">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Preferences</h3>
                          Change your language, currency, and accessibility
                          requirements.
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Currency: </Col>
                            <Col>RON</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button disabled>Edit</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Language: </Col>
                            <Col>American English</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button disabled>Edit</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Accessibility requirements: </Col>
                            <Col>
                              Filter out properties that don't meet your needs .
                            </Col>
                            <Col className="column-3-style" xs={3}>
                              <Button disabled>Edit</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Personalized recommendations: </Col>
                            <Col>
                              On
                              <br></br>
                              We provide personalized recommendations based on
                              your activity on our platform. If you prefer, you
                              can opt out of this option.
                            </Col>
                            <Col className="column-3-style" xs={3}>
                              <Button disabled>Edit</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                    <Tab.Pane eventKey="5.3">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Security</h3>
                          Change your security settings, set up secure
                          authentication, or delete your account.
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Password </Col>
                            <Col>
                              Reset your password regularly to keep your account
                              secure
                            </Col>
                            <Col className="column-3-style" xs={3}>
                              <Button disabled>Reset</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Two-factor authentication</Col>
                            <Col>
                              Increase your account's security by setting up
                              two-factor authentication.
                            </Col>
                            <Col className="column-3-style" xs={3}>
                              <Button disabled>Set up</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Active sessions</Col>
                            <Col>
                              Selecting "Sign out" will sign you out from all
                              devices except this one. This can take up to 10
                              minutes.
                            </Col>
                            <Col className="column-3-style" xs={3}>
                              <Button onClick={handleSignOut}>Sign out</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Delete account</Col>
                            <Col>
                              Permanently delete your Booking.com account
                            </Col>
                            <Col className="column-3-style" xs={3}>
                              <Button
                                onClick={handleDeleteUser}
                                variant="danger"
                              >
                                Delete account
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                    <Tab.Pane eventKey="5.4">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Payment details</h3>
                          Securely add or remove payment methods to make it
                          easier when you book.
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Payment cards</Col>
                            <Col>Pay with a new card</Col>
                            <Col className="column-3-style" xs={3}>
                              <Button disabled>Add card</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                    <Tab.Pane eventKey="5.5">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Privacy</h3>
                          Exercise your privacy rights and control how your data
                          is used.
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Privacy settings </Col>
                            <Col>
                              {currentUser.email}
                              <br></br>Select "Manage" to change your privacy
                              settings and exercise your rights using our
                              request form.
                            </Col>
                            <Col xs={3} className="column-3-style">
                              <Button disabled>Manage</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                    <Tab.Pane eventKey="5.6">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Email notifications</h3>
                          Decide what you wantto be notified about, and
                          unsubscribe from what you don't.
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Email preferences</Col>
                            <Col>
                              {currentUser.email}
                              <br></br>This is the email address you use to sign
                              in. It's also where we send your booking
                              confirmations.
                            </Col>
                            <Col xs={3} className="column-3-style">
                              <Button disabled>Manage</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                    <Tab.Pane eventKey="5.7">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Other travelers</h3>
                          Add or edit info about the people you're traveling
                          with.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}></Col>
                            <Col></Col>
                            <Col xs={3} className="column-3-style">
                              <Button disabled>+ Add new traveler</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                    <Tab.Pane eventKey="5.8">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Admin Panel</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Manage users</Col>
                            <Col></Col>
                            <Col xs={3} className="column-3-style">
                              <Button href="/admin-users">Users page</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Manage properties</Col>
                            <Col></Col>
                            <Col xs={3} className="column-3-style">
                              <Button href="/admin-properties">
                                Properties page
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Manage rentals</Col>
                            <Col></Col>
                            <Col xs={3} className="column-3-style">
                              <Button href="/admin-rentals">
                                Rentals page
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Manage bookings</Col>
                            <Col></Col>
                            <Col xs={3} className="column-3-style">
                              <Button href="/admin-bookings">
                                Bookings page
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col xs={3}>Create rental</Col>
                            <Col></Col>
                            <Col xs={3} className="column-3-style">
                              <Button href="/create-rental">Create</Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                    <Tab.Pane eventKey="5.9">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h3>Bookings list</h3>
                          Add or edit info about the people you're traveling
                          with.
                        </ListGroup.Item>
                        {userBookings &&
                          userBookings.length > 0 &&
                          userBookings.map((booking) => (
                            <ListGroup.Item key={booking._id}>
                              <Row>
                                <Col>{booking._id}</Col>
                                <Col xs={3}>{booking.hotelName}</Col>
                                <Col xs={3} className="column-3-style">
                                  <Button
                                    variant="danger"
                                    onClick={() =>
                                      handleDeleteBooking(booking._id)
                                    }
                                  >
                                    Cancel
                                  </Button>
                                </Col>
                              </Row>
                            </ListGroup.Item>
                          ))}
                      </ListGroup>
                    </Tab.Pane>{" "}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
        </Tabs>
        <br></br>
        <br></br>
      </div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{getQuestion()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {getAnswerForQuestion(selectedQuestion)}
          </Form>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleCloseModal}>Save changes</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Profile;
