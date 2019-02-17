import React, { Component } from "react";
import styles from "../utils/homePage.css";
import Button from "./button.jsx";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <h2 className="slogan">Easy. Breezy. Covergirl.</h2>
          <h5 className="slogan" className="caption">Flawless skin for life</h5>
          <Button className={"ui primary basic button"} msg={"VIEW DEMO"}/>
            <Button className={"ui primary button"} msg={"LEARN MORE"}/>
        </div>
        <div className="middle">
        Features Content Here
        </div>
        <div className="aboutMe">
        About Me
        </div>
      </div>
    )
  }
}

export default HomePage;
