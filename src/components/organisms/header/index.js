import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import Logo from "@components/atoms/logo";

import "./style.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <Container className="d-flex align-items-center" fluid>
          <div className="me-auto header__left d-sm-flex d-none">
          <a href="/" className="link__book text-uppercase fw-bold">Book a Session</a>
          </div>
          <Logo />
          <Button variant="link" className="text-decoration-none ms-auto header__right d-flex text-white p-0">
            <FontAwesomeIcon icon={solid('bars')}/>
          </Button>
        </Container>
      </header>
    );
  }
}

export default Header;
