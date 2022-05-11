import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "amir") {
          this.setState({ status: "amir" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" className="normal">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="assets/img/logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          Pupuk DSR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto text-right padding-remove">
            <li className="cool-link">
              <a class="nav-link" href={"/home"}>
                Profile
              </a>
            </li>
            <li className="cool-link">
              <a class="nav-link" href={"/product"}>
                Product
              </a>
            </li>
            <li className="cool-link">
              <a class="nav-link" href={"/contact"}>
                Contact
              </a>
            </li>
            <li className="cool-link">
              <a class="nav-link loginnav" href={"/u"}>
                Login
              </a>
            </li>
            <li className="cool-link">
              <a class="nav-link loginnav" href={"/register"}>
                Sign Up
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
