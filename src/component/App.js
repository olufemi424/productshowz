import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import Products from "./products/Products";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="title-head">
          Front-End Developer position at Liquidus Marketing
        </div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Products} />
        </Switch>
      </Router>
    );
  }
}

export default App;
