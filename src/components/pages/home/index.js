import { Container, Row, Col, Button } from "react-bootstrap";

import DefaultLayout from "@templates/default-layout";
import Banner from "@organisms/banner";

import "./style.scss";

const Home = () => {
  return (
    <DefaultLayout className="about">
      <Banner />
    </DefaultLayout>
  );
};

export default Home;
