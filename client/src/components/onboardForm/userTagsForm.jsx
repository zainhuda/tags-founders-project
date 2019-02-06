import React, {Component} from 'react';
import axios from 'axios';

export class userTagsForm extends Component {


	continue = (e) => {
		e.preventDefault();

		// call api to update users tags
		const {values: {skills, interests}} = this.props;
		let data = {
			"skills": skills,
			"interests": interests
		};
		console.log("data is:", data);
		axios.post('/api/update_profile', {
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
		const {handleChange, values} = this.props;
		return(
			<div>
				<h1>Enter some skills of yours! sperate them with commas we'll fix this later</h1>
				<input type="text" name="skills" defaultValue={"enter some skills here"} onChange={handleChange('skills')}/>
				<h1>enter somein etersts</h1>
				<input type="text" name="interests" onChange={handleChange('interests')}/>
				<input type="submit" value="continue" onClick={this.continue}/>

			</div>
		)
	}


}

export default userTagsForm;