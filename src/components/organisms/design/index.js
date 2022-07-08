import {Container} from 'react-bootstrap';
import roomImg from "@assets/images/room.png";
import designImg from "@assets/images/design.png";

import "./style.scss";

function Design() {
  return (
    <section className="section-white">
    <Container fluid className="mw-725 mx-auto">
      <h2 className="section-title or__divider">
        <span>DESIGN & CONSTRUCTION</span>
      </h2>

      <div className="d-sm-flex gap-5 mb-5">
        <div className="room-img-wrap text-center mb-3 mb-sm-0">
          <img src={roomImg} alt="" className="img-fluid" />
        </div>
        <div className="fw-light lh-1.5 text-center text-sm-start">
          <p>
            In partnership with the award-winning firm of Heitler Houston
            Architects, our best-in-class real estate and construction
            project management team will guide you through the entire
            process from selecting your Okay Humans location through space
            planning, design and construction project management.
          </p>
          <p>
            We have negotiated a flat fee for real estate and construction
            project management as well as design and architectural services
            for each new Okay Humans location, which is well below the
            industry standard for work of this caliber.
          </p>
        </div>
      </div>

      <div>
        <img src={designImg} alt="" className="img-fluid" />
      </div>
    </Container>
  </section>
  );
}

export default Design;
