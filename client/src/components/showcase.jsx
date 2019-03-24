// this is the landing page that shows off our product and what not
// access through the root path

import React, { Component } from 'react';
import Button from "./button.jsx";
import HeaderNav from "./headerNav/headerNav";
import Footer from "./footer.jsx";
import HomePage from "./homePage.jsx"
import styles from "../App.css";

class Showcase extends Component {
	render() {
		return(
			<div>
				<HeaderNav links={true}/>
				<div className="landing">
					<HomePage />
				</div>

				<div className="features">

				</div>

				<div className="demo">

				</div>

				<div className="about">

				</div>

				<div className="footer">

					<Footer />

				</div>

			</div>
		);
	}
}

export default Showcase;
