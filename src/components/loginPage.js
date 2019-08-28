/* import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";
class LoginPage extends Component {
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

        <section id="login">
          <div className="contact-form bg-primary p-2">
            <h2 className="m-heading">LOGIN</h2>

            <form>
              <div className="form-group">
                <label htmlFor="email">User Name</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Password"
                />
              </div>
              {/* <div className="form-group">
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
export default LoginPage; */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleNameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    let response = await fetch("/login", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (!body.success) {
      console.log("failed");
      return;
    }
    this.props.dispatch({
      type: "login-success",
      username: this.state.username
    });
    this.props.history.push("/");
  };
  render = () => {
    console.log(this.props.loginStatus);
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
          <div id="container-login">
            <div className="form-wrap-login">
              <form onSubmit={this.handleSubmit}>
                <h1 className="login-header">Sign in</h1>
                <div className="form-group-login">
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleNameChange}
                    placeholder="Username"
                    id="user-name"
                    required
                  />
                </div>
                <div className="form-group-login">
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    placeholder="Password"
                    id="password"
                    required
                  />
                </div>
                <div className="form-group-login">
                  <input type="submit" value="Login" />
                </div>
                <div>
                  <Link className="create-account-link" to={"/signup"}>
                    Create an Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </header>
      </div>
    );
  };
}

/* let mapStatetoProps = state => {
  return { loginStatus: state.loginStatus };
};

let Login = connect(mapStatetoProps)(UnconnectedLoginPage); */

export default LoginPage;
