import React, { Component } from "react";
import Button from "./button.jsx";
import styles from "../App.css";

class Header extends Component {
  render () {
    return (
    <header className="headerLP">

    <div className="logo">
      PROJECT X
    </div>

    <nav>
      <ul>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Get in touch</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <button className="signup">Sign up</button>
        </li>
      </ul>
    </nav>

    </header>
    )
  }

}

export default Header
