import { Container, Button } from "react-bootstrap";

import "./style.scss";

function Signup() {
  return (
    <section className="section-white">
      <Container fluid className="mw-725 mx-auto">
        <h2 className="section-title or__divider">
          <span>SIGN ME UP!</span>
        </h2>
        <p className="text-center fw-light lh-1.5">
          In order to take the next step in opening your own Okay Humans, we ask
          that you fill out and return the following application. The
          information you provide will help us determine if we’re a good fit. So
          don’t be brief or shy!
        </p>
        <div className="form-wrap mb-2">
          <div className="fileds-wrap">
            <div className="form-group">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Street Address</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter address"
            />
          </div>
          <div className="fileds-wrap">
            <div className="form-group">
              <label>City</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter city"
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <select className="form-select">
                <option>state 1</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <input className="form-control" type="text" placeholder="#####" />
          </div>
          <div className="fileds-wrap">
            <div className="form-group">
              <label>Cell Phone</label>
              <input
                className="form-control"
                type="text"
                placeholder="(###)###-####"
              />
            </div>
            <div className="form-group">
              <label>Cash Available for Investment</label>
              <select className="form-select">
                <option>select</option>
              </select>
            </div>
          </div>
          <div className="fileds-wrap">
            <div className="form-group">
              <label>Net Worth</label>
              <select className="form-select">
                <option>select</option>
              </select>
            </div>
            <div className="form-group">
              <label>Investment Time Frame</label>
              <select className="form-select">
                <option>select</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Where are you interested in opening?</label>
            <input className="form-control" type="text" placeholder="Enter" />
          </div>
          <div className="form-group">
            <label>LinkedIn profile URL (optional)</label>
            <input className="form-control" type="text" placeholder="Enter" />
          </div>
          <div className="form-group">
            <label>How did you hear about us?</label>
            <select className="form-select">
              <option>select</option>
            </select>
          </div>
        </div>
        <div className="form-group">
            <label>Tell us a little bit about yourself and why you are interested in a OkayHumans franchise.
</label>
            <textarea className="form-control" placeholder="Type here" rows="4"></textarea>
          </div>
          <div className="d-grid mw-300 mx-auto mt-5 pt-3">
          <Button variant="secondary" className="btn-block text-uppercase">
            Submit
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Signup;
