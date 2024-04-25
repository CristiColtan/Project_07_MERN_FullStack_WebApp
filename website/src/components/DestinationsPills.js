import React from "react";
import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";

import "../styles/DestinationsPills.css";

function DestinationsPills() {
  return (
    <div>
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="tab-active" eventKey="first">
                    Regions
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-active" eventKey="second">
                    Cities
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-active" eventKey="third">
                    Attraction Points
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Container>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Predeal</Card.Subtitle>
                            221 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Cluj</Card.Subtitle>1.640 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Delta Dunarii</Card.Subtitle>
                            364 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Transfagarasan</Card.Subtitle>
                            174 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Halkidiki</Card.Subtitle>
                            4.345 properties
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Maramures</Card.Subtitle>
                            622 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Valcea</Card.Subtitle>
                            363 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Bucovina</Card.Subtitle>
                            727 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Tenerife</Card.Subtitle>
                            9.613 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Thasos</Card.Subtitle>
                            1.337 properties
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Bali</Card.Subtitle>
                            12.696 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Santorini</Card.Subtitle>
                            1.766 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Valea Prahovei</Card.Subtitle>
                            3.304 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Zakynthos</Card.Subtitle>
                            1.875 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Ibiza</Card.Subtitle>
                            1.647 properties
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Container>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Londra</Card.Subtitle>
                            14529 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Poiana Brasov</Card.Subtitle>
                            221 properties, 4 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Paltinis</Card.Subtitle>
                            21 properties, 3 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Cluj-Napoca</Card.Subtitle>
                            761 properties, 41 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Iasi</Card.Subtitle>
                            480 properties, 11 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Bucuresti</Card.Subtitle>
                            2.536 properties, 101 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Chisinau</Card.Subtitle>
                            768 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Amsterdam</Card.Subtitle>
                            1902 properties
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Viena</Card.Subtitle>
                            3123 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Targu-Jiu</Card.Subtitle>
                            313 properties, 88 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Frankfurt pe Main</Card.Subtitle>
                            369 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Paris</Card.Subtitle>
                            9876 properties, 7122 hotels
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Container>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Central Plaza</Card.Subtitle>
                            811 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Sun City Resort</Card.Subtitle>5
                            properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Piata Unirii</Card.Subtitle>
                            3.035 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Golden Park</Card.Subtitle>
                            41 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Salina Turda</Card.Subtitle>
                            128 properties
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Gara de Nord</Card.Subtitle>
                            7.593 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Obor</Card.Subtitle>
                            3.035 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Castelul Bran</Card.Subtitle>
                            198 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Burj Khalifa</Card.Subtitle>
                            4.317 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Gara Brasov</Card.Subtitle>
                            1.667 properties
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Sarmizegetusa</Card.Subtitle>7
                            properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Sinaia - Cota 1400</Card.Subtitle>
                            301 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Poarta Sarutului</Card.Subtitle>
                            11 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Castelul Peles</Card.Subtitle>
                            19 properties
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="cardd">
                          <Card.Body className="bodyy">
                            <Card.Subtitle>Castelul Corvinilor</Card.Subtitle>
                            42 properties
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default DestinationsPills;
