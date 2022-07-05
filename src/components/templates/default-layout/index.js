import PropTypes from "prop-types";
import Header from "@components/organisms/header";
import Footer from "@components/organisms/footer";

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
