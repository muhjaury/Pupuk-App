import React, { Component } from "react";
import PreFooter from "./../components/PreFooter";
import Copyright from "./../components/Copyright";
import { NavigationBar } from "./../components/Navigation";

class Contact extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <br />
        <br />
        <div className="section-l" style={{ padding: "0px" }}>
          <div className="image-container">
            <div className="overlay">
              <div className="text d-none d-lg-block">
                <p
                  style={{ color: "#fff", fontSize: "50px", fontWeight: "600" }}
                >
                  Kontak Kami
                </p>
              </div>
            </div>
            <img
              className="imgfit"
              src="assets/img/contact-head.jpg"
              alt="product-head"
            ></img>
          </div>
          <div
            className="container"
            style={{ marginTop: "30px", marginBottom: "50px" }}
          >
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 style={{ marginBottom: "20px" }}>
                  Subscribe to Receive New Updates
                </h1>
                <form className="form-inline mx-auto text-center justify-content-center">
                  <input
                    className="form-control"
                    id="inputEmail"
                    type="email"
                    placeholder="Enter email address"
                    style={{ width: "500px", height: "50px", margin: "10px" }}
                  />
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    style={{ width: "120px", height: "50px", margin: "10px" }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{ marginTop: "30px", marginBottom: "50px" }}
          >
            <div className="row contact">
              <div className="col-md-12 col-lg-4">
                <div className="card">
                  <div className="card-body mx-auto text-center">
                    <img
                      src="assets/img/icon/mail.png"
                      alt="icon-email"
                      style={{ width: "30px", paddingBottom: "15px" }}
                    />
                    <p className="text-muted">EMAIL</p>
                    <hr />
                    <br />
                    <p className="text-muted">
                      divabalqisindonesia.cc@gmail.co.id
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="card">
                  <div className="card-body mx-auto text-center">
                    <img
                      src="assets/img/icon/mobile.png"
                      alt="icon-mobile"
                      style={{ width: "30px", paddingBottom: "15px" }}
                    />
                    <p className="text-muted">PHONE</p>
                    <hr />
                    <br />
                    <p className="text-muted">(+62) 853-9979-9794</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="card">
                  <div className="card-body mx-auto text-center">
                    <img
                      src="assets/img/icon/map.png"
                      alt="icon-map"
                      style={{ width: "30px", paddingBottom: "15px" }}
                    />
                    <p className="text-muted">ADDRESS</p>
                    <hr />
                    <br />
                    <p className="text-muted">
                      Jl. Boulevard No. 171, Kota Makassar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-distributor-maps">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Peta Distributor</h1>
                <img src="assets/img/d-maps.jpeg" alt="d-maps" />
              </div>
            </div>
          </div>
        </div>
        <div className="prefooter">
          <PreFooter />
        </div>
        <div className="footer">
          <Copyright />
        </div>
      </div>
    );
  }
}

export default Contact;
