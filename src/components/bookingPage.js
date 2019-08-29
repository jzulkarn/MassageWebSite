import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";

class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selection: "" };
  }
  selectMassage = option => {
    this.setState({ selection: option });
  };

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
        <header id="signup" className="text-booking">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <h2>Click to select Massage Type</h2>

          {!this.state.selection ? (
            <div className="text-color">
              <div onClick={() => this.selectMassage("Relaxation")}>
                Relaxation
              </div>
              <div onClick={() => this.selectMassage("Deep Tissue")}>
                Deep Tissue
              </div>
              <div
                className="text-bold"
                onClick={() => this.selectMassage("Therapeutic")}
              >
                Therapeutic
              </div>
              <div
                className="text-bold"
                onClick={() => this.selectMassage("Sport")}
              >
                {" "}
                Sport
              </div>
              <div
                className="text-bold"
                onClick={() => this.selectMassage("Pre/Post Natal")}
              >
                Pre/Post Natal
              </div>
            </div>
          ) : (
            <div className="text-booking"> {this.state.selection} </div>
          )}
        </header>
      </div>
    );
  }
}
export default BookingPage;
