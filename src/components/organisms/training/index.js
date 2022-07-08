import {ReactComponent as SettingsIcon} from '@assets/svg/settings.svg';

import "./style.scss";

function Training() {
  return (
    <section className="section-alt">
      <div className="mw-725 mx-auto">
        <div className='mb-3 text-center'>
          <SettingsIcon />
        </div>
        <h2 className="section-title or__divider">
          <span>TRAINING & SUPPORT</span>
        </h2>
        <div className="fw-semibold text-center mb-3">
          We’ll make it super-easy for you to open and operate your Okay Humans.
          <br />
          For example, we provide the following initial and ongoing training and
          support:
        </div>
        <div className="d-sm-flex gap-2">
          <ul className="op-list list-unstyled disc fw-light mb-0">
            <li>Help finding a location and negotiating your lease</li>
            <li>
              Complete store design, development and construction support
              services
            </li>
            <li>
              Full integration with our customized online booking and POS
              systems
            </li>
            <li>
              Cost-savings through utilization of our centralized Guest Services
              center
            </li>
            <li>Comprehensive operations manual</li>
            <li>Comprehensive training in our Los Angeles flagship</li>
          </ul>
          <ul className="op-list list-unstyled disc fw-light mb-0">
            <li>
              Centralized Okay Humans “media profile” wired to each location
            </li>
            <li>
              Marketing support and guidance including Social Media, Public
              Relations, Digital Marketing and Promotional Materials
            </li>
            <li>Pre-Opening training at your newly constructed shop</li>
            <li>
              The opportunity to join a group of like-minded operating partners
              who will share their key learnings and successes with you
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Training;
