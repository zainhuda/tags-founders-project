// this is the landing page that shows off our product and what not
// access through the root path

import React, { Component } from 'react';
import Button from "./button.jsx";
import HeaderNav from "./headerNav/headerNav";
import Footer from "./footer/footer.jsx";
import styles from "../App.css";
/*
<Button className={"ui primary basic button"} msg={"VIEW DEMO"}/>
  <Button className={"ui primary button"} msg={"LEARN MORE"}/>
*/
class Showcase extends Component {
	render() {
		return(
			<>
				<HeaderNav links={true}/>
				<div className="showcase">
					<div className="slogan">
						<h1>Tags</h1>
						<h3>Meet, connect, and get to know your team.</h3>
						<div>
							<button className="action-button">Get Started</button>
						</div>
					</div>
					<div className="">
						<span class="helper"></span>
						<img className="showcase-image" src={require('../assets/images/showcase-image1.png')}/>

					</div>
				</div>
				<div className="">
					<img className="features-transition" src={require('../assets/images/features-transition.png')}/>
				</div>
				<div className="features">
					<div className="features-image-container">
						<img className="features-image" src={require('../assets/images/features-image1@2x.png')}/>
					</div>
					<div className="features-text">
						Put a name to a face
					</div>
					<div className="features-text">
						Connect and get to know your co-workers skills and interests
					</div>
					<div className="features-image-container">
						<img className="features-image" src={require('../assets/images/features-image2@2x.png')}/>
					</div>
					<div className="features-image-container">
						<img className="features-image" src={require('../assets/images/features-image3@2x.png')}/>
					</div>
					<div className="features-text">
						Make friends
					</div>
				</div>
				<div className="">
					<img className="features-end" src={require('../assets/images/features-end.png')}/>
				</div>
				<div className="action">
					<h1>Interested in Tags?</h1>
					<br></br>
					<div>
						<button className="action-button">Get Started</button>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Showcase;
