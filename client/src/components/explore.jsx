// this page needs to display the different profile components
// should also include the brains to sort by department or soemting
// accessed through the path: /explore

import EmployeeDirectory from './employeeDirectory';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import React, {Component} from 'react';
import LoggedInRedirect from "./loggedInRedirect";

import SearchBar from './searchBar/searchBar';

import './explore.css';

class Explore extends Component {

	render() {

		return(
			<div>
				<LoggedInRedirect/>

			<div className="explore-grid">

				<Sidebar className="sidebar"/>
				<div className="directory">
					<SearchBar/>
					<EmployeeDirectory className="employee-directory"/>
				</div>
			</div>
			</div>
		);
	}
}

export default Explore;
