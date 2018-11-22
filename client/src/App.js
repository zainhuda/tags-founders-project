import React, { Component } from "react";
import "./App.css";
import { Button, Col, Grid } from "react-bootstrap";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import EmployeeDirectory from "./components/employeeDirectory";
import {Route, BrowserRouter} from "react-router-dom";
import ProfilePage from "./components/profilePage";

class App extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Col>
          <Sidebar/>
          <Col lg={9} className="content">
            <Header/>
            <Route exact path="/" component={EmployeeDirectory} />
            <Route path="/profile" component={ProfilePage} />
          </Col>
        </Col>
      </BrowserRouter>

    );
  }
}

export default App;
