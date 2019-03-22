// this page needs to display the different profile components
// should also include the brains to sort by department or soemting
// accessed through the path: /explore

import EmployeeDirectory from './employeeDirectory';
import Header from './header';
import Sidebar from './sidebar';

import React, {Component} from 'react';

import './explore.css';

class Explore extends Component {
	render() {


		return(
			<div>
				<Header/>
			<div className="explore-grid">
				
				<Sidebar className="sidebar"/>
				<EmployeeDirectory className="employee-directory"/>
			</div>
			</div>
		);
	}
}

export default Explore;