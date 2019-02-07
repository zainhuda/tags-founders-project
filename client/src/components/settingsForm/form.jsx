// this will be the user settings form to change profile
// parent that will decide what elements get displayed

import React, { Component } from "react";
import UserDetailsForm from "./userDetailsForm";
import UserTagsForm from "./userTagsForm";
import ConfirmForm from "./confirmForm";
import FormSubmitted from "./formSubmitted";

export class Form extends Component {

	state = {
		// all the values that need to be changed have to be first declared here
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		position: '',
		image_512: '',
		interests: [],
		skills: [],
		step: 1
	};

	// move to the next step of the form
	nextStep = () => {
		const {step} = this.state;
		this.setState({
			step: step + 1
		})
	};

	// go back a step of the form
	prevStep = () => {
		const {step} = this.state;
		this.setState({
			step: step - 1
		})
	};

	// handle the field change
	handleChange = (input) => (e) => {
		this.setState({
			[input]: e.target.value
		})
	};

	render() {
		const {step} = this.state;
		const {firstName, lastName, email, position, interests, skills, image_512} = this.state;
		const values = {firstName, lastName, email, position, interests, skills, image_512};

		switch(step) {
			case 1:
				return (
					<UserDetailsForm
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
						changePage={this.props.changePage}
					/>
				);
			case 2:
				return (
					<UserTagsForm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return(
					<ConfirmForm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values}
					/>
				);
			case 4:
				return(
					<FormSubmitted/>
				);
		}

		return(
			<div>
			</div>
		)
	}
}

export default Form