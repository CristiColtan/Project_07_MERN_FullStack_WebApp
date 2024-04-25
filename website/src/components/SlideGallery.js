import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import Bucuresti from "../images/BUC2.jpg";
import Brasov from "../images/BRASOV.jpg";
import Cluj from "../images/CLUJ2.jpg";
import Sibiu from "../images/SIBIU2.jpg";
import Constanta from "../images/CONSTANTA2.jpg";

import Sighisoara from "../images/sighisoara2.jpg";
import Rasnov from "../images/rasnov2.jpg";
import Sinaia from "../images/sinaia2.jpg";
import Bran from "../images/castel_bran2.jpg";
import TGJiu from "../images/targujiu2.jpg";

import Timisoara from "../images/timisoara2.jpg";

import Flag from "../images/ro_flag.jpg";

import "../styles/SlideGallery.css";

function SlideGallery() {
  return (
    <div>
      <div>
        <Carousel className="carrousel_inner">
          <Carousel.Item className="caroussel_item">
            <Stack
              direction="horizontal"
              className="d-flex justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Img variant="top" src={Timisoara} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Timisoara
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Constanta} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Constanta
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Rasnov} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Rasnov
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Cluj} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Cluj
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Sinaia} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Sinaia
                  </Card.Title>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item className="caroussel_item">
            <Stack
              direction="horizontal"
              className="d-flex justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Img variant="top" src={Sighisoara} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Sighisoara
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Brasov} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Brasov
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Bran} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Castelul Bran
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={TGJiu} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Targu Jiu
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Sibiu} />
                <Card.Body>
                  <Card.Title>
                    <img
                      alt=""
                      src={Flag}
                      width="40"
                      height="25"
                      className="d-inline-block align-top"
                    />{" "}
                    Sibiu
                  </Card.Title>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        </Carousel>
        <br></br>
      </div>
    </div>
  );
}

export default SlideGallery;
