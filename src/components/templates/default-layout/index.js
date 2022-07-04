import PropTypes from "prop-types";
import { Header, Footer } from "@components/organisms";
const propTypes = {
  hasFooter: PropTypes.bool,
};

const defaultProps = {
  hasFooter: true,
};

const DefaultLayout = ({ children, hasFooter, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <Header />
      {children}
      {hasFooter ? <Footer /> : ""}
    </div>
  );
};

DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;

export default DefaultLayout;
