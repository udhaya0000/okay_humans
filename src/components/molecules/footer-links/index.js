import PropTypes from "prop-types";

import "./style.scss";

const propTypes = {
  links: PropTypes.array,
};

const defaultProps = {
  links: [],
};

function FooterLinks({ links, ...otherProps }) {
  return links.length ? (
    <div {...otherProps}>
      <ul className="list-unstyled footer__links text-uppercase mb-0">
        {links.map((item, index) => (
          <li key={index} className="footer__link-item">
            <a
              href={(item.tel ? "tel:" : "") + item.url}
              className="footer__link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
}

FooterLinks.defaultProps = defaultProps;
FooterLinks.propTypes = propTypes;

export default FooterLinks;
