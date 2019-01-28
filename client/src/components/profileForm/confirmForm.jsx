import React, {Component} from 'react';

export class ConfirmForm extends Component {

	continue = (e) => {
		e.preventDefault();
		// process form here
		// call api to update user profile

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