import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/CreateRental.css";

export default function CreateRental() {
  const [files, setFiles] = useState([]);
  console.log(files);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    photo: [],
    seats: 5,
    large_bag: false,
    small_bag: false,
    transmission: "Manual",
    un_mileage: false,
    price: 0,
  });

  console.log(formData);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.photo.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            photo: formData.photo.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed! (2MB MAX/image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can upload between 0 and 6 images!");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    if (
      e.target.id === "small_bag" ||
      e.target.id === "large_bag" ||
      e.target.id === "un_mileage"
    ) {
      setFormData({ ...formData, [e.target.id]: e.target.checked });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "textarea" ||
      e.target.type === "text"
    ) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.photo.length < 1)
        return setError("You must upload at least 1 image!");

      setLoading(true);
      setError(false);

      const res = await fetch("http://localhost:8081/backend/rental/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate("/rentals");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="main-create-rental">
      <div>
        <br></br>
        <h3>List a car!</h3>
        <p>Please fill in the form!</p>
        <br></br>
        <Form>
          <Row>
            <Col>
              <FloatingLabel controlId="name" label="Name" className="mb-3">
                <Form.Control
                  type="textarea"
                  placeholder=""
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="transmission"
                label="Transmission"
                className="mb-3"
              >
                <Form.Control
                  type="textarea"
                  placeholder=""
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Form.Check
                inline
                label="Large Bag"
                name="large_bag"
                type="checkbox"
                id="large_bag"
                onChange={handleChange}
                checked={formData.large_bag}
              ></Form.Check>
              <Form.Check
                inline
                label="Small Bag"
                name="small_bag"
                type="checkbox"
                id="small_bag"
                onChange={handleChange}
                checked={formData.small_bag}
              ></Form.Check>
              <Form.Check
                inline
                label="Unlimited Mileage"
                name="un_mileage"
                type="checkbox"
                id="un_mileage"
                onChange={handleChange}
                checked={formData.un_mileage}
              ></Form.Check>
              <div className="my-big-div">
                <div className="my-input-div">
                  <input
                    type="number"
                    id="seats"
                    min="2"
                    max="7"
                    required
                    className="p-3 my-input border"
                    onChange={handleChange}
                    value={formData.seats}
                  ></input>
                  <p style={{ marginLeft: "5px" }}>Seats</p>
                </div>
                <div className="my-input-div">
                  <input
                    type="number"
                    id="price"
                    min="0"
                    max="1000"
                    required
                    className="p-3 my-input border"
                    onChange={handleChange}
                    value={formData.price}
                  ></input>
                  <p style={{ marginLeft: "5px" }}>Price (RON/3 days)</p>
                </div>
              </div>
            </Col>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>You can choose only images!</Form.Label>
                <Form.Control
                  onChange={(e) => setFiles(e.target.files)}
                  type="file"
                  accept="image/*"
                  multiple
                />
                <br></br>
                <Button
                  type="button"
                  onClick={handleImageSubmit}
                  variant="success"
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Upload"}
                </Button>
              </Form.Group>
              <div style={{ float: "right" }}>
                <Button disabled={uploading || loading} onClick={handleSubmit}>
                  {loading ? "Creating..." : "Create Rental!"}
                </Button>
              </div>
              <p style={{ color: "red" }}>
                {imageUploadError && imageUploadError}
              </p>
              <br></br>
              <br></br>
              {formData.photo.length > 0 &&
                formData.photo.map((url, index) => (
                  <div key={index} className="my-listing-img-div">
                    <img
                      src={url}
                      alt="listing pic"
                      className="
                      my-listing-img"
                    ></img>
                    <Button
                      style={{
                        width: "80px",
                        height: "40px",
                        marginLeft: "17rem",
                      }}
                      variant="danger"
                      onClick={() => handleRemoveImage(index)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
            </Col>
          </Row>
        </Form>
        <br></br>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
