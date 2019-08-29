import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";
class MenuPage extends Component {
  render() {
    return (
      <div>
        <nav id="navbar">
          <h1 className="logo">
            <span className="text-primary">
              {" "}
              <i className="fas fa-book-open"></i> CM
            </span>
            SPA
          </h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/price">Pricing</Link>
            </li>
            <li>
              <Link to="/booking">Book</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <header id="signup">
          <h1 className="text-primary">Menu </h1>

          <h2 class="text-color">1-RELAXATION | SWEDISH MASSAGE</h2>
          <p className="text-color">
            A massage that is entirely focused to calm the nervous system. A
            relaxation massage is exceptionally beneficial for increasing the
            level of oxygen in the blood by increasing circulation throughout
            the body, decreasing muscle toxins, improving circulation and is
            most known to decrease levels of stress.
          </p>

          <h2 class="text-color">2-DEEP TISSUE MASSAGE</h2>
          <p className="text-color">
            A massage with stronger pressure aimed to release deeper muscle
            layers. A deep tissue massage is especially beneficial for relieving
            chronic muscle pain,
          </p>
          <p className="text-color">
            improves limited mobility, postural problems, aids sport related
            recovery and is injury preventive.
          </p>
          <h2 class="text-color">3-THERAPEUTIC MASSAGE</h2>
          <p className="text-color">
            A massage that is aimed to treat a specific muscle group. This
            massage can be combined with a general Swedish massage (relaxation
            massage) while having a more therapeutic approach on a specified
            muscle group.
          </p>
          <p className="text-color">
            A therapeutic massage is a combination of deep tissue massage,
            passive stretches and trigger point therapy.
          </p>
          <h2 className="text-color">4-SPORT MASSAGE</h2>
          <p className="text-color">
            Specific therapeutic technique that meets the needs of an athlete.
            This particular treatment is aimed at relaxing specific tension and
            preparing the body for a given activity.
          </p>
          <h2 class="text-color">5-PRE and POST NATAL MASSAGE</h2>
          <p className="text-color">
            Your therapist is specialized in this specialty to provide a
            treatment protocol to the needs of a future mother.
          </p>
          <p className="text-color">
            The main focus of this treatment is to provide a better circulation
            throughout the entire body and to treat the area’s that result to
            compression and stiffness due to the expansion of the abdomen.
          </p>

          <p className="text-primary">
            *I'm registered and certified by ACTMD and NAPQ to practice in
            Quebec*
          </p>
        </header>
      </div>
    );
  }
}
export default MenuPage;
