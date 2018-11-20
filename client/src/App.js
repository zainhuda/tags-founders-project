import React, { Component } from "react";
import "./App.css";
import { Button, Col, Grid } from "react-bootstrap";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import EmployeeDirectory from "./components/employeeDirectory";

class App extends Component {
  render() {
    return (
      <Grid className="App" fluid>
        <Sidebar />
        <EmployeeDirectory />
      </Grid>
    );
  }
}

export default App;
