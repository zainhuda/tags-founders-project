import React, { Component } from "react";
import styles from "./navbar.css";

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <a href="#">How it works</a>
        <a href="#">About us</a>
        <a href="#">FAQ</a>
        <a href="#">Get in touch</a>
        <a href="/auth/slack">Login</a>
        <button href="/auth/slack" id="navbarsignup">Sign up</button>
      </div>
    )
  }
}

export default Navbar
