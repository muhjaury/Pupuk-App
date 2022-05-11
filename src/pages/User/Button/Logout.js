import React, { Component } from "react";
import { connect } from "react-redux";
import { emailStore } from "../../../redux/action/email.action";
import { loginStore } from "../../../redux/action/login.action";
import styled from "styled-components";

const Button = styled.button`
  margin: 0 auto;
  background-color: #343a40;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: 0px solid white;
  padding: 0;
`;

class Logout extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    this.props.loginStore(false);
    this.props.emailStore("");
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleLogOut}>Log Out</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginStore: (isLogin) => dispatch(loginStore(isLogin)),
  emailStore: (isEmail) => dispatch(emailStore(isEmail)),
});

export default connect(null, mapDispatchToProps)(Logout);
