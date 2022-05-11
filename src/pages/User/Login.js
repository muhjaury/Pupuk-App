import React, { Component } from "react";
import { connect } from "react-redux";
import { loginStore } from "../../redux/action/login.action";
import { emailStore } from "../../redux/action/email.action";
import { NavigationBar } from "../../components/Navigation";
import axios from "axios";
import hash from "md5";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginInfo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.info = this.info.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:3001/u/login",
        {
          email: email,
          password: hash(password),
        },
        { withCredentials: true }
      )
      .then((response) => {
        this.info(response.data);
      });
    e.preventDefault();
  }
  info(data) {
    if (data === "Invalid Email or Password") {
      this.props.loginStore(false);
      this.props.emailStore("");
      this.setState({
        loginInfo: <p style={{ backgroundColor: "red" }}>{data}</p>,
      });
    } else {
      this.props.loginStore(true);
      this.props.emailStore(this.state.email);
    }
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="login">
          <div className="content">
            <div className="section-l" style={{ padding: "0px" }}>
              <div
                className="container"
                style={{ marginTop: "30px", marginBottom: "50px" }}
              >
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 style={{ marginBottom: "20px" }}>Login</h1>
                    <div
                      style={{
                        height: "28px",
                        color: "white",
                      }}
                    >
                      {this.state.loginInfo}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <input
                        className="form-control mx-auto"
                        type="email"
                        placeholder="Email"
                        style={{ height: "50px", margin: "10px" }}
                        name="email"
                        onChange={this.handleChange}
                        required
                      />

                      <input
                        className="form-control mx-auto"
                        type="password"
                        placeholder="Password"
                        style={{ height: "50px", margin: "10px" }}
                        name="password"
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
                        Login
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

const mapDispatchToProps = (dispatch) => ({
  loginStore: (isLogin) => dispatch(loginStore(isLogin)),
  emailStore: (isEmail) => dispatch(emailStore(isEmail)),
});
export default connect(null, mapDispatchToProps)(Login);
