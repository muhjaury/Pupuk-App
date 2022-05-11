import React, { Component } from "react";
import PreFooter from "./../components/PreFooter";
import Copyright from "./../components/Copyright";
import { NavigationBar } from "./../components/Navigation";

class Product extends Component {
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
                  Produk Kami
                </p>
              </div>
            </div>
            <img
              className="imgfit"
              src="assets/img/product-head.jpg"
              alt="product-head"
            ></img>
          </div>
          <div className="container-fluid">
            <br />
            <h1 data-aos="fade-up" data-aos-anchor-bottom="top-center">
              Product
            </h1>
            <hr
              data-aos="fade-up"
              data-aos-anchor-bottom="top-center"
              className="gradiation"
            />
            <br />
            <div className="row">
              <div
                data-aos="fade-up"
                data-aos-anchor-bottom="top-center"
                data-aos-delay="200"
                className="col-12 col-lg-3 d-flex justify-content-center product"
                style={{ padding: "20px" }}
              >
                <div
                  className="card cardproduct"
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="overlay-hover"></div>
                  <img
                    className="imgfit"
                    src="assets/img/product/1.png"
                    alt="img1"
                    style={{ height: "400px" }}
                  ></img>
                  <div className="card-text">
                    <h3 style={{ textAlign: "center" }}>Pupuk A</h3>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-bottom="top-center"
                data-aos-delay="400"
                className="col-12 col-lg-3 d-flex justify-content-center product"
                style={{ padding: "20px" }}
              >
                <div
                  className="card cardproduct"
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="overlay-hover"></div>
                  <img
                    className="imgfit"
                    src="assets/img/product/2.png"
                    alt="img1"
                    style={{ height: "400px" }}
                  ></img>
                  <div className="card-text">
                    <h3 style={{ textAlign: "center" }}>Pupuk B</h3>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-bottom="top-center"
                data-aos-delay="600"
                className="col-12 col-lg-3 d-flex justify-content-center product"
                style={{ padding: "20px" }}
              >
                <div
                  className="card cardproduct"
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="overlay-hover"></div>
                  <img
                    className="imgfit"
                    src="assets/img/product/3.png"
                    alt="img1"
                    style={{ height: "400px" }}
                  ></img>
                  <div className="card-text">
                    <h3 style={{ textAlign: "center" }}>Pupuk C</h3>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-bottom="top-center"
                data-aos-delay="800"
                className="col-12 col-lg-3 d-flex justify-content-center product"
                style={{ padding: "20px" }}
              >
                <div
                  className="card cardproduct"
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="overlay-hover"></div>
                  <img
                    className="imgfit"
                    src="assets/img/product/1.png"
                    alt="img1"
                    style={{ height: "400px" }}
                  ></img>
                  <div className="card-text">
                    <h3 style={{ textAlign: "center" }}>Pupuk D</h3>
                  </div>
                </div>
              </div>
            </div>
            <br />
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

export default Product;
