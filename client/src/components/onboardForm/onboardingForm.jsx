// this wil lbe the form that userse see immediately after signing up through slack

import React, {Component} from "react";
import UserDetailsForm from "./userDetailsForm";
import UserTagsForm from "./userTagsForm";
import Success from "./success";
import Footer from '../footer/footer';
import HeaderNav from "../headerNav/headerNav";

export class OnboardingForm extends Component {

	state = {
		// user details
		firstName: '',
		lastName: '',
		image_512: '',
		title: '',
		phone: '',
		email: '',
		// tags
		skills: [],
		interests: [],
		step: 1,
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
		const {firstName, lastName, image_512, title, phone, email, skills, interests} = this.state;
		const values = {firstName, lastName, image_512, title, phone, email, skills, interests};

		switch(step){
			case 1:
				return(
					<>
						<HeaderNav/>
						<UserDetailsForm
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={values}
						/>
						<Footer/>
					</>
				);
			case 2:
				return(
					<>
						<HeaderNav/>
						<UserTagsForm
							nextStep={this.nextStep}
							prevStep={this.prevStep}
							handleChange={this.handleChange}
							values={values}
						/>
						<Footer/>
					</>

				);
			case 3:
				return(
					<>
						<HeaderNav/>
						<Success
							nextStep={this.nextStep}
							prevStep={this.prevStep}
						/>
						<Footer/>
					</>

			)
		}
	}
}

export default OnboardingForm
