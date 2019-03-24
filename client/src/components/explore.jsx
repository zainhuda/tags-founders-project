// this page needs to display the different profile components
// should also include the brains to sort by department or soemting
// accessed through the path: /explore

import EmployeeDirectory from './employeeDirectory';
import Sidebar from './sidebar/sidebar';
import React, {Component} from 'react';
import LoggedInRedirect from "./loggedInRedirect";
import Footer from './footer/footer';
import Header from './header/header';

import './explore.css';

class Explore extends Component {

	render() {

		return(
			<div>
				<LoggedInRedirect/>
			<div className="explore-grid">
				<Sidebar className="sidebar"/>
				<div className="directory">
					<Header/>
					<EmployeeDirectory className="employee-directory"/>
				</div>
			</div>
				<Footer/>
			</div>
		);
	}
}

export default Explore;
