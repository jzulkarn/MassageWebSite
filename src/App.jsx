import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";
import PricePage from "./components/PricePage";
import BookingPage from "./components/BookingPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
/* import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"; */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/price" component={PricePage} />
          <Route exact path="/booking" component={BookingPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route path="/createaccount" component={CreateAccount} />
          <Route path="/login" component={Login} />
          <Route
            exact
            path="/dashboard"
            render={props => <Dashboard {...props} page={"entries"} />}
          />
          <Route
            path="/dashboard/:page"
            render={routeProps => (
              <Dashboard {...routeProps} page={routeProps.match.params.page} />
            )} 
          />
          {/* <footer
            style={{
              display: "block",
              position: "fixed",
              bottom: "5px",
              left: "1%",
              "font-family": "Barlow Semi Condensed",
              "font-size": "1.2rem"
            }}
          >
            Footer Connie M
          </footer> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
