import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import Aiud from "../images/aiud2.jpg";
import Craiova from "../images/craiova2.jpg";
import Iasi from "../images/iasi2.jpg";
import Oradea from "../images/oradea2.jpg";
import Ploiesti from "../images/ploiesti2.jpg";

import CascadaCailor from "../images/cascada_cailor2.jpg";
import BaleaLac from "../images/balealac2.jpg";
import BuzauVulcani from "../images/buzau_vulcani2.jpg";
import Transfagarasan from "../images/transfagarasan2.jpg";
import Rasnov from "../images/rasnov2.jpg";
import PoianaBrasov from "../images/poiana_brasov2.jpg";

import Constanta from "../images/CONSTANTA2.jpg";
import Mamaia from "../images/mamaia2.jpg";
import Neptun from "../images/neptun2.jpg";
import Costinesti from "../images/costinesti2.jpg";
import VamaVeche from "../images/vama_veche2.jpg";

import Flag from "../images/ro_flag.jpg";

import "../styles/Planner.css";

function Planner() {
  return (
    <div>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Cities">
            <Stack
              direction="horizontal"
              className="d-flex justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Img variant="top" src={Aiud} />
                <Card.Body>
                  <Card.Subtitle>Aiud</Card.Subtitle>
                  <Card.Text>586km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Craiova} />
                <Card.Body>
                  <Card.Subtitle>Craiova</Card.Subtitle>
                  <Card.Text>213km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Iasi} />
                <Card.Body>
                  <Card.Subtitle>Iasi</Card.Subtitle>
                  <Card.Text>331km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Oradea} />
                <Card.Body>
                  <Card.Subtitle>Oradea</Card.Subtitle>
                  <Card.Text>413km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Ploiesti} />
                <Card.Body>
                  <Card.Subtitle>Ploiesti</Card.Subtitle>
                  <Card.Text>89km away from you.</Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Tab>
          <Tab eventKey="profile" title="Nature">
            <Stack
              direction="horizontal"
              className="d-flex justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Img variant="top" src={CascadaCailor} />
                <Card.Body>
                  <Card.Subtitle>Cascada Cailor</Card.Subtitle>
                  <Card.Text>134km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={BaleaLac} />
                <Card.Body>
                  <Card.Subtitle>Balea Lac</Card.Subtitle>
                  <Card.Text>99km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Transfagarasan} />
                <Card.Body>
                  <Card.Subtitle>Transfagarasan</Card.Subtitle>
                  <Card.Text>201km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={BuzauVulcani} />
                <Card.Body>
                  <Card.Subtitle>Vulcanii Noroiosi Buzau</Card.Subtitle>
                  <Card.Text>57km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={PoianaBrasov} />
                <Card.Body>
                  <Card.Subtitle>Poiana Brasov</Card.Subtitle>
                  <Card.Text>250km away from you.</Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Tab>
          <Tab eventKey="longer-tab" title="Beach">
            <Stack
              direction="horizontal"
              className="d-flex justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Img variant="top" src={Constanta} />
                <Card.Body>
                  <Card.Subtitle>Constanta</Card.Subtitle>
                  <Card.Text>201km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Mamaia} />
                <Card.Body>
                  <Card.Subtitle>Mamaia</Card.Subtitle>
                  <Card.Text>203km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Costinesti} />
                <Card.Body>
                  <Card.Subtitle>Costinesti</Card.Subtitle>
                  <Card.Text>206km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={VamaVeche} />
                <Card.Body>
                  <Card.Subtitle>Vama Veche</Card.Subtitle>
                  <Card.Text>209km away from you.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Neptun} />
                <Card.Body>
                  <Card.Subtitle>Neptun</Card.Subtitle>
                  <Card.Text>215km away from you.</Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Tab>
          <Tab eventKey="contact" title="Coming soon..." disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Planner;
