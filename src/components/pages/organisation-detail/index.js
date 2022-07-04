// core
import React from "react";

// third party
import { Col, Container, Row, Button } from "react-bootstrap";

// app specific
import SuggestionWrapper from "@components/molecules/suggestion-wrapper";
import {
  OrganisationDetailMain,
  History,
  SuggestedList,
  OrganisationTeamWidget,
  OrganisationProjectsWidget,
  GrabDropdown,
} from "@components/organisms";
import DefaultLayout from "@templates/default-layout";

// style
import "./style.scss";

class OrganisationDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      petsOpen: false,
    };
  }

  render() {
    return (
      <DefaultLayout>
        <SuggestionWrapper>
          <div className="d-flex align-items-center">
            <SuggestedList />
            <div className="ms-auto d-flex align-items-center">
              <Button size="lg" className="fw-bold">
                Donate
              </Button>
              <GrabDropdown />
            </div>
          </div>
        </SuggestionWrapper>
        <Container fluid className="py-5">
          <Row>
            <Col md="7" className="mb-4">
              <OrganisationDetailMain progress={70} />
            </Col>
            <Col md="5">
              <div className="mb-4">
                <OrganisationTeamWidget />
              </div>
              <History />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="py-5">
            <Col md="6" className="mb-4 mb-0">
              <OrganisationProjectsWidget />
            </Col>
            <Col md="6"></Col>
          </Row>
        </Container>
      </DefaultLayout>
    );
  }
}

export default OrganisationDetail;
