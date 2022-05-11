import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { emailStore } from "../../redux/action/email.action";
import { loginStore } from "../../redux/action/login.action";
import styled from "styled-components";
import Logout from "./Button/Logout";

const Styled = styled.section`
  body {
    font-size: 0.875rem;
  }

  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }

  /*
  * Sidebar
  */

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  }

  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 48px; /* Height of navbar */
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }

  .sidebar .nav-link.active {
    color: #007bff;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  /*
  * Navbar
  */

  .navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
  }

  .navbar .form-control {
    padding: 0.75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }

  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
  }

  /*
  * Utilities
  */

  .border-top {
    border-top: 1px solid #e5e5e5;
  }
  .border-bottom {
    border-bottom: 1px solid #e5e5e5;
  }
`;

function Dashboard({ isEmail }) {
  if (isEmail !== "") {
    return (
      <Styled>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-center"
            href={"/u"}
            style={{ fontSize: "20px" }}
          >
            Pupuk DSR
          </a>
          {/* <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href={"#0"}>
                <Logout />
              </a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Dashboard <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Customers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Integrations
                    </a>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <a
                    className="d-flex align-items-center text-muted"
                    href={"#0"}
                  >
                    Saved Report
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Current month
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Last quarter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Social engagement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"#0"}>
                      Year-end sale
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <h2>Dashboard</h2>
              <div className="row">
                <div style={{ margin: "0 auto" }}>
                  <div className="card">
                    <h5 className="card-header">Featured</h5>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text text-justify">
                        With supporting text below as a natural lead-in to
                        additional content. With supporting text below as a
                        natural lead-in to additional content. With supporting
                        text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to
                        additional content. With supporting text below as a
                        natural lead-in to additional content. With supporting
                        text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to
                        additional content. With supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a href={"#0"} className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    );
  } else if (isEmail === "") {
    return <Redirect to="/u" />;
  } else {
    return <Redirect to="/404" />;
  }
}
const mapStateToprops = ({ emailStore: { isEmail } }) => ({
  isEmail,
});
const mapDispatchToProps = (dispatch) => ({
  loginStore: (isLogin) => dispatch(loginStore(isLogin)),
  emailStore: (isEmail) => dispatch(emailStore(isEmail)),
});
export default connect(mapStateToprops, mapDispatchToProps)(Dashboard);
