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

  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/bubblegum",
      sidebar: () => <div>bubblegum!</div>,
      main: () => <h2>Bubblegum</h2>
    },
    {
      path: "/shoelaces",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
    }
];


  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar/>
          <Route exact path="/" component={EmployeeDirectory} />
          <Route path="/profile" component={ProfilePage} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
