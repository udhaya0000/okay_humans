import { Container, Row, Col, Button } from "react-bootstrap";

import DefaultLayout from "@templates/default-layout";
import Banner from "@organisms/banner";
import StorefrontImg from "@assets/images/storefront.png";

import "./style.scss";

const Home = () => {
  return (
    <DefaultLayout className="about">
      <Banner />

      <section className="storefront-section">
        <Container fluid className="mw-960">
          <div className="storefront-title text-center">
            Want to won an Okay Humans
          </div>
          <img
            src={StorefrontImg}
            alt=""
            className="storefront-img img-fluid"
          />
          <h2 className="section-title or__divider">
            <span>Here’s what you need to know</span>
          </h2>
          <p className="mb-3 lh-1.5 text-center fw-light">
            Hi there! We’re so pleased you’re interested in an Okay Humans
            franchise. Below you’ll find a whole bunch of helpful information
            about us, and what it takes to become an Operating Partner. There’s
            an application at the bottom of the page, but if you wanna cut to
            the chase, click here!
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <Button variant="secondary" className="text-uppercase">
              Take me to application
            </Button>
          </div>
        </Container>
      </section>
    </DefaultLayout>
  );
};

export default Home;
