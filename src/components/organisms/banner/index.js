import React from "react";
import { Container, Button } from "react-bootstrap";
import { ReactComponent as BannerText } from "@assets/svg/banner-text.svg";
import { ReactComponent as Couple } from "@assets/svg/couple.svg";
import { ReactComponent as ScrollImgText } from "@assets/svg/emotional-welness.svg";

import "./style.scss";

function Banner() {
  return (
    <section className="main-banner">
      <Container
        className="main-banner__content d-flex align-items-center justify-content-center"
        fluid
      >
        <BannerText />

        <Button variant="link" className="scroll-btn p-0">
          <div>
            <Couple />
          </div>
          <div>
            <ScrollImgText className="" />
          </div>
        </Button>
      </Container>
    </section>
  );
}

export default Banner;
