import { Row, Col, Button, Container } from "react-bootstrap";
import IconContent from "@molecules/icon-content";
import { ReactComponent as Lens } from "@assets/svg/lens.svg";
import { ReactComponent as Trees } from "@assets/svg/trees.svg";
import { ReactComponent as Mobile } from "@assets/svg/mobile.svg";
import "./style.scss";

function HowItWorks() {
  return (
    <section className="hiw-section">
      <Container fluid className="mw-860 mx-auto">
        <h2 className="section-title or__divider">
          <span>How it works</span>
        </h2>
        <Row className="mb-3 pb-3">
          <Col md="4" className="text-center mb-5 mb-sm-0">
            <IconContent
              icon={<Lens />}
              title={<span>Finding a therapist<br/>near me is easy</span>}
            >
              <p className="hiw-content fw-light lh-1.5 mw-278 mx-auto">
                Profiles and bios make it simple to find your ideal mental
                wellness partner before you book.
              </p>
            </IconContent>
          </Col>
          <Col md="4" className="text-center mb-5 mb-sm-0">
            <IconContent
              icon={<Trees />}
              title={<span>It’s not an office,<br/>it’s an oasis.</span>}
            >
              <p className="hiw-content fw-light lh-1.5 mw-278 mx-auto">
                Our beautiful space will help you start to feel okay the minute
                you walk through the door.
              </p>
            </IconContent>
          </Col>
          <Col md="4" className="text-center mb-5 mb-sm-0">
            <IconContent
              icon={<Mobile />}
              title={<span>Our app makes<br/>booking a snap!</span>}
            >
              <p className="hiw-content fw-light lh-1.5 mw-278 mx-auto">
                Book, pay, check in, receive notes from your therapist and
                everything in between!
              </p>
            </IconContent>
          </Col>
        </Row>
        <div className="d-grid mw-300 mx-auto">
          <Button variant="secondary" className="btn-block text-uppercase">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;
