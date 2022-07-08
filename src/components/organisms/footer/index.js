import React from "react";

import IconButton from "@components/molecules/icon-button";
import FooterLinks from "@components/molecules/footer-links";
import { ReactComponent as Logo } from "@assets/svg/smiley_white.svg";
import { ReactComponent as FacebookIcon } from "@assets/svg/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "@assets/svg/instagram-icon.svg";
import links from "./links.json";

import "./style.scss";

function Footer() {
  return (
    <section className="footer__wrap">
      <div className="footer">
        <div className="footer-content d-grid mx-auto">
          <div className="footer__logo footer__block text-center text-lg-start">
            <div className="d-block mx-auto">
              <Logo />
            </div>
          </div>
          <div className="footer__social d-flex align-items-end justify-content-center">
            <IconButton
              size="lg"
              className="p-0"
              href="https://www.instagram.com"
              icon={<InstagramIcon />}
              target="_blank"
            />
            <IconButton
              size="lg"
              className="p-0"
              href="https://www.facebook.com"
              icon={<FacebookIcon />}
              target="_blank"
            />
          </div>
          <div className="footer__links-wrap d-grid">
            <div className="footer__block text-center text-lg-start">
              <FooterLinks links={links["link_list_1"]} />
            </div>
            <div className="footer__block text-center text-lg-start">
              <FooterLinks links={links["link_list_2"]} />
            </div>
            <div className="footer__block text-center text-lg-start">
              <FooterLinks links={links["link_list_3"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
