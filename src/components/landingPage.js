import React, { Component } from "react";
import "../style.css";
import { FaSpa } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { FaHot-tub } from "react-icons/fa";
//import { FaBaby } from "react-icons/fa";
//import { FaSwimmer } from "react-icons/fa";
/* import { Link } from "react-router-dom";
import styled from "styled-components"; */

class LandingPage extends Component {
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

        <header id="showcase">
          <div className="showcase-content">
            <h1 className="l-heading">MASSAGE SPA</h1>
            <h1 className="l-heading">TAYLORED TO YOUR NEEDS</h1>
            {/* <div>
                <input className="bar1" type="submit" value="BOOK" />
                </div> */}
          </div>
        </header>

        <section id="what" className="bg-light py-1">
          <div className="container">
            <h2 className="m-heading text-center">
              <span className="text-primary">MASSAGE</span> MENU
            </h2>
            <div className="items">
              <div className="item">
                <i>
                  <FaSpa />
                </i>
                <div>
                  <h3>DEEP TISSUE</h3>
                </div>
              </div>
              <div className="item">
                <i>
                  <FaHeart />
                </i>
                <div>
                  <h3>THERAPEUTIC</h3>
                </div>
              </div>
              <div className="item">
                <i>
                  <FaSpa />
                </i>
                <div>
                  <h3>SPORT</h3>
                </div>
              </div>
              <div className="item">
                <i>
                  <FaSpa />
                </i>
                <div>
                  <h3>RELAXATION</h3>
                </div>
              </div>
              <div className="item">
                <i>
                  <FaHeart />
                </i>
                <div>
                  <h3>PRE AND POST NATAL</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="who">
          <div className="who-img"></div>
          <div className="who-text bg-dark p-2">
            <h2 className="m-heading">
              <span className="text-primary">Location</span>
            </h2>
            <p>CMSPA® 1250 Rue St-Catherine Montreal, QC H4N 2R5 CAN</p>
            <p>
              800.888.8888 info@cmspa.com Business Hours: Mon - Wed, 10am to 6pm
              Thu-Fri 11am to 8pm Sat-Sun Closed
            </p>
          </div>
        </section>

        <section id="clients" className="py-1">
          <div className="container">
            <h2 className="m-heading text-center">
              <span className="text-primary">MEMBER OF</span>{" "}
              <div>
                <img src="/ANPQ.png" alt="Client" />
              </div>
            </h2>
            <div className="items py-1">
              <div>
                <img src="/waka.png" alt="Client" />
              </div>
              <div>
                <img src="/ManulifeBox.jpg" alt="Client" />
              </div>

              <div>
                <img src="/rbc.png" alt="Client" />
              </div>
              <div>
                <img src="/bootcamp.png" alt="Client" />
              </div>
            </div>
          </div>
        </section>

        <footer id="main-footer" className="bg-dark text-center py-1">
          <div className="container">
            <p>
              Copyright &copy; 2019, Concordia Bootcamp, All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
