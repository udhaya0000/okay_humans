import { Container, Button } from "react-bootstrap";

import DefaultLayout from "@templates/default-layout";
import Banner from "@organisms/banner";
import HowItWorks from "@organisms/how-it-works";
import Design from "@organisms/design";
import OperatingPartner from "@organisms/operating-partner";
import Training from "@organisms/training";

import storefrontImg from "@assets/images/storefront.png";
import christyImg from "@assets/images/christy.png";
import teamImg from "@assets/images/team.png";

import "./style.scss";
import Signup from "../../organisms/signup";

const Home = () => {
  return (
    <DefaultLayout className="about">
      <Banner />

      <section className="storefront-section">
        <Container fluid className="mw-960">
          <div className="storefront-title text-center">
            Want to won an Okay Humans
          </div>
          <div className="mb-4">
            <img
              src={storefrontImg}
              alt=""
              className="storefront-img img-fluid"
            />
          </div>
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

      <section className="section-alt">
        <div className="mw-725 mx-auto">
          <h2 className="section-title or__divider">
            <span>Our Story</span>
          </h2>
          <div className="d-flex story-content mb-4">
            <div className="content-wrap">
              <p className="fw-light">
                Christy Desai, Okay Humans Co-Founder, CEO and LMFT, joined
                forces with the founders of{" "}
                <a href="/" className="fw-semibold text-decoration-underline">
                  Drybar
                </a>{" "}
                and{" "}
                <a href="/" className="fw-semibold text-decoration-underline">
                  Squeeze
                </a>{" "}
                to bring her new talk therapy concept to life. Boasting a
                combined 100+ years of launching and operating
                experience-driven, customer obsessed brands, the multifaceted
                team has their sights set on changing the way people experience
                retail across categories – and more importantly – leaving their
                mark on people’s lives, and the world, for good.
              </p>
            </div>
            <div className="img-content w-100 mb-3 mb-sm-0">
              <div className="img-wrap">
                <div className="img-wrap__inner d-inline-block">
                  <div>
                    <img src={christyImg} className="rounded" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex story-content">
            <div className="content-wrap">
              <p className="fw-light">
                Christy’s own experience with therapy turned into a personal
                mission to help other people feel better, stronger, and more
                alive. She believes there’s no reason why talking to a trained
                professional shouldn’t be as acceptable as going to the dentist,
                the hair salon, or seeking out a personal trainer. Okay Humans
                was designed to normalize seeking support, to rethink the
                outdated therapy model, and to open up the conversation about
                getting to okay.
              </p>
            </div>
            <div className="img-content img-content__2 w-100 mb-3 mb-sm-0">
              <div className="img-wrap">
                <div className="img-wrap__inner d-inline-block">
                  <div>
                    <img src={teamImg} className="rounded" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="join-text mt-5 mb-5 text-center lh-1">
            We’re excited you’re interested in joining us help others!
          </div>
        </div>
      </section>

      <HowItWorks />

      <OperatingPartner />

      <Design />

      <Training />

      <Signup />
    </DefaultLayout>
  );
};

export default Home;
