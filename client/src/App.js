import React, { Component } from "react";
import "./App.css";
import { Col } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

// import components

import SignUp from "./components/signup";
import Showcase from './components/showcase'; // Page that features product
import Explore from './components/explore';
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import EmployeeDirectory from "./components/employeeDirectory";
import ProfilePage from "./components/profilePage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Showcase} />
          <Route path="/explore" component={Explore} />
          <Route path="/my_profile" />

          <Route path="/david" component={SignUp}/>



        </div>
      </BrowserRouter>
    );
  }
}

export default App;
