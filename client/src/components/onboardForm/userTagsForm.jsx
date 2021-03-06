import React, {Component} from 'react';
import axios from 'axios';
import InterestsChips from './interestsChips';
import SkillsChips from './skillsChips';

import './userTagsForm.css';

export class userTagsForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			// initialize empty lists of chips
			// this state is passed onto child components
			interestChips: [],
			skillChips: []
		}
	}


	continue = (e) => {
		e.preventDefault();

		const {interestChips, skillChips} = this.state;
		let data = {
			// create the post data
			"skills": skillChips,
			"interests": interestChips
		};
		// console.log("data is:", data);
		// call api to update users tags
		axios.post('/api/update_tags', {
			body: JSON.stringify(data)
		})
			.then((response) => {
				// lets see if it updated alright
				console.log("response after post", response);
			});
		// move onto the next step
		this.props.nextStep();
	};

	// function to go back a page in the form
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	// two way link between child and parent states for interets and skills chips
	onInterestChange = interestChips => {
		this.setState({
			interestChips: interestChips
		})
	};

	onSkillChange = skillChips => {
		this.setState({
			skillChips: skillChips
		})
	};

	render() {
		const {handleChange, values} = this.props;
		return(
			<div className="main-container">
				<div className="form">
					<h1>Tags</h1>
					<p className="tags-sub">Enter a few tags to get started.</p>
					<h3>Skills</h3>
					<div className="tags-field">
						<SkillsChips onChipChange={this.onSkillChange} skillChips={this.state.skillChips}/>
					</div>
					<h3>Interests</h3>
					<div className="tags-field">
						<InterestsChips onChipChange={this.onInterestChange} interestChips={this.state.interestChips}/>
					</div>
					<br/>
					<input type="submit" className="submit-button" value="Next" onClick={this.continue}/>
				</div>
			</div>
		)
	}
}

export default userTagsForm;
