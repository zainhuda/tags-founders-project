import React, { Component } from "react";
import styles from "../utils/homePage.css";

//To choose button styling, go to "https://semantic-ui.com/elements/button.html" and set className to the button you want
class Button extends Component {

  render() {
    return (
    <div>
    <button className={this.props.className}>{this.props.msg}</button>
    </div>
    )
  }
}

export default Button;
