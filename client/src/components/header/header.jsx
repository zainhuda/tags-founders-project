// this component imports the search bar and adds other routing
import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  Glyphicon,
  Row
} from "react-bootstrap";
import {Link} from 'react-router-dom';

import SearchBar from '../searchBar/searchBar';
import './header.css';

class Header extends Component {

  render() {
    return (
        <div class="header-container">
            <div id="search-bar">
                <SearchBar/>
            </div>
            <div id="profile-icon">
                <Link to="/my-profile"> My Profile </Link>
            </div>

        </div>

    );
  }
}

export default Header;
