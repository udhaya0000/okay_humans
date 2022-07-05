import { Container, Row, Col } from "react-bootstrap";

import DefaultLayout from "@templates/default-layout";

import "./style.scss";

const About = () => {
  return (
    <DefaultLayout className="about">
      <div className="bg-lighter pb-4">
        <Container fluid>
          <Row className="about__row-1">
            <Col md="5" className="mb-4 mb-sm-0">
              
            </Col>
            <Col md="7">
              <div className="d-flex align-items-center ps-sm-5 justify-content-sm-center">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/621a6ad2371ac979e17501e8_4895778.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </DefaultLayout>
  );
};

export default About;
