import React, {Component} from 'react';
import axios from 'axios';
import InterestsChips from './interestsChips';
import SkillsChips from './skillsChips';

export class userTagsForm extends Component {


	constructor(props) {
		super(props);

		this.state = {
			interestChips: [],
			skillChips: []
		}
	}


	continue = (e) => {
		e.preventDefault();

		// call api to update users tags
		const {interestChips, skillChips} = this.state;

		console.log("intershs chips are: ", interestChips);
		console.log("skil chips are: ", skillChips);
		let data = {
			"skills": skillChips,
			"interests": interestChips
		};
		console.log("data is:", data);
		axios.post('/api/update_tags', {
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




	onInterestChange = interestChips => {
		this.setState({
			interestChips: interestChips
		})
	}
	onSkillChange = skillChips => {
		this.setState({
			skillChips: skillChips
		})
	}


	render() {
		const {handleChange, values} = this.props;
		return(
			<div class="main-container">
				<div class="form">
					<h1>Tags</h1>
					<p>Enter some tags to get started.</p>
					<h1>Skills</h1>
					<SkillsChips onChipChange={this.onSkillChange} skillChips={this.state.skillChips}/>
					<h1>Interests</h1>
					<InterestsChips onChipChange={this.onInterestChange} interestChips={this.state.interestChips}/>
					<br/>
					<input type="submit" class="submit-button" value="continue" onClick={this.continue}/>
				</div>
			</div>
		)
	}


}

export default userTagsForm;
