// this will contain the main logic for the user's profile page
// waht wil lbe included here? a view of their details, settings link, ability to change skills and interests

import React, {Component} from 'react';

// import different profile pages
import MyProfile from './myProfile';
import SettingsForm from '../settingsForm/form';
import ChangeTags from './tags/changeTags';

class ProfilePage extends Component {

	state = {
		page: 'myProfile',
	};

	// change page method
	changePage = (goPage) => {
		this.setState({
			page: goPage
		});
	};
	//

	render() {
		const {page} = this.state;
		switch (page) {
			// load which ever settings page
			case "myProfile":
				return(
					<div>
						<MyProfile changePage={this.changePage}/>
					</div>
				);
			case "changeTags":
				return(
					<div>
						<ChangeTags changePage={this.changePage} />
					</div>
				);
			case "settings":
				return(
					<div>
						<SettingsForm changePage={this.changePage}/>
					</div>
				);
		}
	}
}

export default ProfilePage;