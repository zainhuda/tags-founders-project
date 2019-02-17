import React, { Component } from "react";
import Navbar from "./navbar/navbar.jsx";
import Footer from "./footer/footer.jsx";

class HomePage extends Component {
  render() {
    return (
      <div>
      <div className="landingnavigation">
      <Navbar />
      </div>
      <div className="landing">
      <div className="introduction">
        <h2 className="slogan">Slogan here</h2>
        <h5 className="slogan" id="caption">Sub-Heading</h5>
      </div>
      <div className="features">
      Features Content Here
      </div>
      <div className="demo">
      Demo Here
      </div>
      <div className="about">
      About Me
      </div>
      </div>
      <div className="landingfooter">
      <Footer />
      </div>
      </div>
    )
  }
}

export default HomePage;
