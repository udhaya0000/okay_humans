import PropTypes from "prop-types";
import "./style.scss";

const propTypes = {
  icon: PropTypes.element,
  title: PropTypes.element,
};

const defaultProps = {};

function IconContent({ icon, title, children, ...otherProps }) {
  return (
    <div {...otherProps}>
      <div className="icon-wrap mb-2">{icon}</div>
      <h2 className="icon-title mb-2">{title}</h2>
      {children}
    </div>
  );
}

IconContent.propTypes = propTypes;
IconContent.defaultProps = defaultProps;

export default IconContent;
