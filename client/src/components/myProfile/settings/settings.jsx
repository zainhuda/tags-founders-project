import React, {Component} from 'react';
import axios from 'axios';
import InterestsModal from './interestsModal';
import SkillsModal from './skillsModal';
import Loading from '../../loading/loading';
import "./settings.css";
// redux action
import {connect} from 'react-redux';

// improt navigation constants
import {PROFILE_PAGE, SETTINGS_PAGE} from '../myProfileNavPages';

// import form field constants
import {FIRST_NAME, LAST_NAME, TITLE, IMAGE, PHONE, EMAIL} from './fields';

class Settings extends Component {

	handleChange = (input) => (e) => {
		//console.log("input is", input);
		this.props.myProfile[0].teamData[input] = e.target.value;
		//console.log(this.props.myProfile[0].teamData[input])
	}

	continue = (e) => {
		console.log("values are", this.props.myProfile[0].teamData)
		const {firstName, lastName, title, image_512, phone, email, skills, interests} = this.props.myProfile[0].teamData;
		// this method updates the user's data
		e.preventDefault();

		// create the data to be sent to update user profile
		let data = {

			"firstName": firstName,
			"lastName": lastName,
			"image_512": image_512,
			"title": title,
			"phone": phone,
			"email": email,
			"skills": skills,
			"interests": interests
		};
		console.log("data from userDetailsForm:", data);

		// call the api to update the user pfoiel
		axios.post('api/update_profile', {
			body: JSON.stringify(data)
		})
			.then((response) => {
				console.log("response after update_profiel", response)
			});
		// move onto the next step (skills and interests)
		this.props.changePage(PROFILE_PAGE)
	};

	// somehwat useless function
	back = (e) => {
		e.preventDefault();
		this.props.changePage(PROFILE_PAGE);
	};


	render() {
		console.log("in settings", this.props.myProfile[0]);
		const {firstName, lastName, image_512, title, phone, email, interests, skills } = this.props.myProfile[0].teamData;

			return(
				<div className="main-container settings">
					<div className="form">
						<h1>Edit Profile</h1>

						<p className="user-form-sub">Edit how your profile looks to others on Tags.</p>

						<div className="fields-container">
							<h4>First Name</h4>
							<input
								type="text"
								name={FIRST_NAME}
								defaultValue={firstName}
								onChange={this.handleChange(FIRST_NAME)}
								className="user-detail-form-field"
							/>
							<h4>Last Name</h4>
							<input
								type="text"
								name={LAST_NAME}
								defaultValue={lastName}
								onChange={this.handleChange(LAST_NAME)}
								className="user-detail-form-field"
							/>
							<h4>Profile Picture URL</h4>
							<input
								type="text"
								name={IMAGE}
								defaultValue={image_512}
								onChange={this.handleChange(IMAGE)}
								className="user-detail-form-field"
							/>
							<h4>Title</h4>
							<input
								type="text"
								name={TITLE}
								defaultValue={title}
								onChange={this.handleChange(TITLE)}
								className="user-detail-form-field"
							/>
							<h4>Phone #</h4>
							<input
								type="text"
								name={PHONE}
								defaultValue={phone}
								onChange={this.handleChange(PHONE)}
								className="user-detail-form-field"
							/>
							<h4>Email</h4>
							<input
								type="text"
								name={EMAIL}
								defaultValue={email}
								onChange={this.handleChange(EMAIL)}
								className="user-detail-form-field"
							/>
							<h4>Interests</h4>
							<InterestsModal/>
							<SkillsModal/>
						</div>
						<input className="settings-submit-button" type="submit" value="Back" onClick={this.back}/>
						<input className="settings-submit-button" type="submit" value="Save" onClick={this.continue}/>
					</div>
				</div>
			)
		}

}

function mapStateToProps(state) {
	return {
		myProfile: state.myProfile
	};
}

export default connect(mapStateToProps)(Settings);
