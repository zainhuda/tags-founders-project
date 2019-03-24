import React, { Component } from "react";
import "./App.css";
import { Col } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions'

// import components

import SignUp from "./components/registration/signup";
import Showcase from './components/showcase'; // Page that features product
import Explore from './components/explore';
import OnboardingForm from './components/onboardForm/onboardingForm';
import Header from "./components/header/header";
import InactiveUserList from "./components/inactiveUsers/inactiveUserList";
import {HashRouter} from "react-router-dom"
import LinkWithSlack from "./components/onboardForm/linkWithSlack";

import Loading from "./components/loading/loading";

import MyProfile from "./components/myProfile/myProfile";


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
          <Route path="/david" component={SignUp}/>
          <Route path="/onboard" component={OnboardingForm}/>
          <Route path="/inactive-users" component={InactiveUserList}/>
          <Route path="/slack" component={LinkWithSlack} />
        <Route path="/my-profile" component={MyProfile}/>
        <Route path="/load" component={Loading}/>
        </div>
      </HashRouter>
    );
  }
}

export default connect(null, actions)(App);
