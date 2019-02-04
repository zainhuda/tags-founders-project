// this wil lbe the form that userse see immediately after signing up through slack

import React, {Component} from "react";
import UserDetailsForm from "./userDetailsForm";
import Success from "./success";

export class OnboardingForm extends Component {

	state = {
		// all the fields the user might need to change

		step: 1,
	};

	// move to the enxt step of the form
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
		const {firstName, lastName, email} = this.state;
		const values = {firstName, lastName, email};

		switch(step){
			case 1:
				return(
					<UserDetailsForm
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return(
					<Success
						nextStep={this.nextStep}
						prevStep={this.prevStep}
					/>
			)
		}
	}


}

export default OnboardingForm