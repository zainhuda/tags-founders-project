// this page needs to display the different profile components
// should also include the brains to sort by department or soemting
// accessed through the path: /explore

import EmployeeDirectory from './employeeDirectory';
import Header from './header';
import Sidebar from './sidebar';
import React, {Component} from 'react';
import LoggedInRedirect from "./loggedInRedirect";

class Explore extends Component {

	render() {
		return(
			<div>
				<LoggedInRedirect/>
				<Header/>
				<Sidebar/>
				<EmployeeDirectory/>
			</div>
		);
	}
}

export default Explore;