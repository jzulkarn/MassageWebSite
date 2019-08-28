import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";
class ContactPage extends Component {
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

        <section id="contact">
          <div className="contact-form bg-primary p-2">
            <h2 className="m-heading">Contact Us</h2>
            <p>Please use the form below to contact us</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <input type="submit" value="Send" className="btn btn-dark" />
            </form>
          </div>
          <div className="map"></div>
        </section>
      </div>
    );
  }
}
export default ContactPage;
