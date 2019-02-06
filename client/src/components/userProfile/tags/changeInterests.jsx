import React, {Component} from 'react';

import TagBubble from './tagBubble';

class ChangeInterests extends Component {


	render() {
		return(
			<div>
				change interests here!
				<form onSubmit={event => {
					event.preventDefault();
					console.log("subbmited");
				}}>
					<input placeholder="enter your interests"/>
				</form>
			</div>
		)
	}
}

export default ChangeInterests;