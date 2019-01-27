import React, { Component } from "react";
import styles from "../App.css";

//To choose button styling, go to "https://semantic-ui.com/elements/button.html" and set className to the button you want
class input extends Component {

  render() {
    return (
    <div>
    <input className={this.props.text}>{this.props.placeholder}</input>
    </div>
    )
  }
}

export default input;
