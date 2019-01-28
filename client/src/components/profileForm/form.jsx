// this will be the user settings form to change profile
// parent that will decide what elements get displayed

import React, { Component } from "react";

export class Form extends Component {

	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		position: ''
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
		return(
			<div>


			</div>
		)
	}
}

export default Form