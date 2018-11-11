import React, { Component } from "react";
import "./App.css";
import { Button, Col, Grid } from "react-bootstrap";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import ListingContent from "./components/listingContent";

class App extends Component {
  render() {
    return (
      <Grid className="App" fluid>
        <Header />
        <Sidebar />
        <ListingContent />
      </Grid>
    );
  }
}

export default App;
