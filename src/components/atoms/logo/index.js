import React from "react";
import {ReactComponent as LogoIcon} from '@assets/svg/logo.svg';

import "./style.scss";

class Logo extends React.Component {
  render() {
    return (
      <a href="/" className="logo-wrap d-flex align-items-center text-decoration-none">
        <LogoIcon />
      </a>
    );
  }
}

export default Logo;
