import React, { Component } from "react";
import "./App.css";
import { Col } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";


// import components

import SignUp from "./components/registration/signup";
import Showcase from './components/showcase'; // Page that features product
import Explore from './components/explore';
import OnboardingForm from './components/onboardForm/onboardingForm';
import ProfilePage from './components/userProfile/profilePage';
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import EmployeeDirectory from "./components/employeeDirectory";
import InactiveUserList from "./components/inactiveUsers/inactiveUserList";
import {HashRouter} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact={true} path="/" component={Showcase} />
          <Route path="/explore" component={Explore} />
            <Route path="/profile" component={ProfilePage}/>
          <Route path="/david" component={SignUp}/>
          <Route path="/onboard" component={OnboardingForm}/>
          <Route path="/inactive-users" component={InactiveUserList}/>


        </div>
      </HashRouter>
    );
  }
}

export default App;
