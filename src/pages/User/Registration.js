import React, { Component } from "react";
import { NavigationBar } from "../../components/Navigation";
import axios from "axios";
import hash from "md5";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationInfo: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.info = this.info.bind(this);
  }
  handleSubmit(e) {
    const { name, email, password, password_confirmation } = this.state;
    axios
      .post(
        "http://localhost:3001/u/registrations",
        {
          name: name,
          email: email,
          password: hash(password),
          password_confirmation: hash(password_confirmation),
        },
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({ registrationInfo: response.data });
        this.info();
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    this.setState({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  info(e) {
    if (
      this.state.registrationInfo === "Wrong Password Confirmation" ||
      this.state.registrationInfo === "Email is Already Registered"
    ) {
      this.setState({
        registrationInfo: (
          <p style={{ backgroundColor: "red" }}>
            {this.state.registrationInfo}
          </p>
        ),
      });
    } else if (this.state.registrationInfo === "Registration Successful") {
      this.setState({
        registrationInfo: (
          <p style={{ backgroundColor: "green" }}>
            {this.state.registrationInfo}
          </p>
        ),
      });
    }
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="registration">
          <div className="content">
            <div className="section-l" style={{ padding: "0px" }}>
              <div
                className="container"
                style={{ marginTop: "30px", marginBottom: "50px" }}
              >
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 style={{ marginBottom: "20px" }}>Register</h1>
                    <div
                      style={{
                        height: "28px",
                        color: "white",
                      }}
                    >
                      {this.state.registrationInfo}
                    </div>
                    <form classname="registration" onSubmit={this.handleSubmit}>
                      <input
                        className="form-control mx-auto registration"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />

                      <input
                        className="form-control mx-auto registration"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />

                      <input
                        className="form-control mx-auto registration"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />

                      <input
                        className="form-control mx-auto registration"
                        type="password"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                      />

                      <button
                        className="btn btn-outline-success"
                        type="submit"
                        style={{
                          width: "120px",
                          height: "45px",
                          margin: "10px",
                          borderRadius: "15px",
                        }}
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
