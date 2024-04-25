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

import "../styles/CreateListing.css";

export default function CreateListing() {
  const [files, setFiles] = useState([]);
  console.log(files);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    location: "",
    address: "",
    description: "",
    additional_description: "",
    price: 0,
    rooms: 1,
    reviews: 0,
    mark: "Excellent",
    rating: "9.1",
    wifi: false,
    parking: false,
    pool: false,
  });
  console.log(formData);

  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
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
            imageUrls: formData.imageUrls.concat(urls),
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
      e.target.id === "wifi" ||
      e.target.id === "parking" ||
      e.target.id === "pool"
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
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least 1 image!");

      setLoading(true);
      setError(false);

      const res = await fetch("http://localhost:8081/backend/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...formData, userRef: currentUser._id }),
      });

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="main-create-listing">
      <div>
        <br></br>
        <h3>List your property!</h3>
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
                controlId="location"
                label="Location"
                className="mb-3"
              >
                <Form.Control
                  type="textarea"
                  placeholder=""
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="address"
                label="Address"
                className="mb-3"
              >
                <Form.Control
                  type="textarea"
                  placeholder=""
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="description"
                label="Description"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder=""
                  style={{ height: "100px" }}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="additional_description"
                label="Extra informations"
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
                label="Wi-fi"
                name="wifi"
                type="checkbox"
                id="wifi"
                onChange={handleChange}
                checked={formData.wifi}
              ></Form.Check>
              <Form.Check
                inline
                label="Parking"
                name="parking"
                type="checkbox"
                id="parking"
                onChange={handleChange}
                checked={formData.parking}
              ></Form.Check>
              <Form.Check
                inline
                label="Pool"
                name="pool"
                type="checkbox"
                id="pool"
                onChange={handleChange}
                checked={formData.pool}
              ></Form.Check>
              <div className="my-big-div">
                <div className="my-input-div">
                  <input
                    type="number"
                    id="rooms"
                    min="1"
                    max="10"
                    required
                    className="p-3 my-input border"
                    onChange={handleChange}
                    value={formData.rooms}
                  ></input>
                  <p style={{ marginLeft: "5px" }}>Rooms</p>
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
                  <p style={{ marginLeft: "5px" }}>Price (RON/night)</p>
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
                  {loading ? "Creating..." : "Create Listing!"}
                </Button>
              </div>
              <p style={{ color: "red" }}>
                {imageUploadError && imageUploadError}
              </p>
              <br></br>
              <br></br>
              {formData.imageUrls.length > 0 &&
                formData.imageUrls.map((url, index) => (
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
