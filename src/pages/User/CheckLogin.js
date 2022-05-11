import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

const Attempt = ({ isLogin }) => {
  console.log({ isLogin });
  return (
    <Router>
      <Switch>
        {isLogin ? (
          <Route path="/" component={Dashboard} />
        ) : (
          <Route path="/" component={Login} />
        )}
      </Switch>
    </Router>
  );
};
const mapStateToprops = ({ loginStore: { isLogin } }) => ({
  isLogin,
});
export default connect(mapStateToprops)(Attempt);
