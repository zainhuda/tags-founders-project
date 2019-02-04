import React, {Component} from 'react';
import axios from 'axios';

export class ConfirmForm extends Component {

	continue = (e) => {
		e.preventDefault();
		// process form here


		const { values: {firstName, lastName, email, position, interests, skills}} = this.props;
		let data = {
			"firstName": firstName,
			"lastName": lastName,
			"email": email,
			"position": position,
			"interests": interests,
			"skills": skills
		};
		// call api to update user profile
		axios.post('api/update_profile', {
			body: JSON.stringify(data)
		})
			.then((response) => {
				console.log(response);
			})
			.then((data) => {
				console.log(data);
			});

		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values: {firstName, lastName, email, position, interests, skills}} = this.props;
		return(
			<div>
				<h1>Confirm changes</h1>
				<ul>
					<li>First Name</li>
					<li>{firstName}</li>
					<li>Last Name</li>
					<li>{lastName}</li>
					<li>Email</li>
					<li>{email}</li>
					<li>Position</li>
					<li>{position}</li>
					<li>Interests</li>
					<li>{interests}</li>
					<li>Skills</li>
					<li>{skills}</li>
				</ul>
				<input type="submit" value="Back" onClick={this.back}/>
				<input type="submit" value="Submit" onClick={this.continue}/>
			</div>
		)
	}
}

export default ConfirmForm;