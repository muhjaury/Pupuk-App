import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import CRUD from "./pages/CRUD";
import CheckLogin from "./pages/User/CheckLogin";
import Register from "./pages/User/Registration";
import Dashboard from "./pages/User/Dashboard";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/crud" component={CRUD} />
        <Route path="/u" component={CheckLogin} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}
export default Main;
