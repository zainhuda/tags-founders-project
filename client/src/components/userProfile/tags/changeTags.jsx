// this is where the user will change what sorts of tags they want

// gareths notes
// we need a componenets to load the tags already saved to the user profile (SAVED TAGS)
// we need a different copoentn to live refresh the tags as the user makes changes (NOT YET SAVED TAGS)
// method to save the tags when they hit like ok or soemting (API CALL TO UPDATE PROFILE)
// some sort of text handler function

import React, {Component} from 'react';

import ChangeInterests from './changeInterests';
import SavedInterests from './savedInterests';

class ChangeTags extends Component {
	render() {
		return(
			<div>
				yeet this is where u chagne TAGSSSSS
				<ChangeInterests/>
				<SavedInterests/>
				<input type="submit" value="go back to profiel page" onClick={() => {this.props.changePage("myProfile")}} />
			</div>
		)
	}
}

export default ChangeTags;