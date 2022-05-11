import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PreFooter() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="prefooter">
      <div className="container" style={{ textAlign: "left" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <img
              alt="logo"
              src="assets/img/logo.png"
              width="150"
              height="150"
              className="d-inline-block align-top"
            />
          </div>
          <div
            data-aos-delay="200"
            className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
          >
            <h3>Address</h3>
            <p>
              <i className="fa fa-home text-white">
                Jl. Boulevard No. 171, Kota Makassar, Sulawesi Selatan
              </i>
            </p>
          </div>
          <div
            data-aos-delay="400"
            className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
          >
            <h3>Contact Us</h3>
            <p>
              <i className="fa fa-envelope text-white">
                Email : email.cc@gmail.co.id
              </i>
              <br />
              <i className="fa fa-phone"> Phone : (+62) 853-9979-9794</i>
              <br />
              <i className="fa fa-instagram"> divabalqisindonesia</i>
              <br />
            </p>
          </div>
          <div
            data-aos-delay="600"
            className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
          >
            <h3>Newslatter</h3>
            <p>
              Keep up with our always upcoming news and updates. Enter your
              e-mail and subscribe to our newsletter.
            </p>
            <form className="d-flex">
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="Enter email address"
              />
              <button
                className="btn btn-primary"
                type="submit"
                style={{ display: "none" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreFooter;
