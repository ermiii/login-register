import React, { Component } from "react";
import LoginStudent from "./components/LoginStudent";
import LoginMentors from "./components/LoginMentors";
import LoginAdmin from "./components/LoginAdmin";
import Navigation from "./components/Navigation";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="all-container">
        <BrowserRouter>
          <NavigationBar />

          <Switch>

            <Route path="/LoginAdmin" component={LoginAdmin} />
            <Route path="/LoginMentors" component={LoginMentors} />
            <Route path="/LoginStudent" component={LoginStudent} />
          </Switch>

          <Navigation />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
