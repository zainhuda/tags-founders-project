import React, {Component} from 'react';
import axios from 'axios';

export class ConfirmForm extends Component {

	continue = (e) => {
		e.preventDefault();
		// process form here

		let data = {
			"firstName:": this.props.firstName,
			"lastName": this.props.lastName,
			"email": this.props.email,
			"position": this.props.positions
		};

		// call api to update user profile
		axios.post('api/update_profile', {
			body: JSON.stringify(data)
		})
			.then((response) => {
				return response.json()
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
		const { values: {firstName, lastName, email, position}} = this.props;
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
				</ul>
				<input type="submit" value="Back" onClick={this.back}/>
				<input type="submit" value="Submit" onClick={this.continue}/>
			</div>
		)
	}
}

export default ConfirmForm;