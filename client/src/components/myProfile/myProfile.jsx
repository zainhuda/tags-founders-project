// this will contain the main logic for the user's profile page

import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchMyProfile} from '../../actions';

// import different profile pages
import Settings from './settings/settings';
import Profile from '../profile/profile';

import Loading from '../loading/loading';

import {PROFILE_PAGE, SETTINGS_PAGE} from './myProfileNavPages';
import Sidebar from "../sidebar/sidebar";
import {Col} from 'react-bootstrap'
class MyProfile extends Component {

	state = {
		page: PROFILE_PAGE
    };

	componentDidMount() {
		this.props.fetchMyProfile()
	}

	// change page method
	changePage = (goPage) => {
		this.setState({
			page: goPage
		});
	};

	renderContent() {
		const {myProfile} = this.props
		//console.log("profile is yeeter", myProfile[0]);
		if (myProfile.length === 0) {
			return (
				<>
					<Loading centered={true}/>
				</>
			)
		}
		else {
			const values = myProfile[0].teamData;
			//console.log("value are", values);
			return (
				<div className="explore-grid">
					<Sidebar/>
					<Col className="employee-directory" lg="auto">
					<Profile
						values={values}
						changePage={this.changePage}
					/>
					</Col>
				</div>
			)
		}
	}

	render() {

		let {page} = this.state;
		switch (page) {
			case PROFILE_PAGE:
				return(
					<>
						{this.renderContent()}
					</>
				)
			case SETTINGS_PAGE:
				return(
					<>
						<Settings
							changePage={this.changePage}
						/>
					</>
				)
		}
		return(
			<div>
				{this.renderContent()}
			</div>
		)

	}
}

function mapStateToProps(state) {
	return {myProfile: state.myProfile}
}

export default connect(mapStateToProps, {fetchMyProfile})(MyProfile);
