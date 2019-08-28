import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";
class BookingPage extends Component {
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
        <h1>Booking Page</h1>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <header id="showcase"></header>
      </div>
    );
  }
}
export default BookingPage;
