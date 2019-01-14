// this is the landing page that shows off our product and what not
// access through the root path

import React, { Component } from 'react';

class Showcase extends Component {
	render() {
		return(
			<div>
				<nav>
					<a className="left">
						Project X
					</a>
					<ul className="right">
						<li>How it works</li>
						<li>About us</li>
						<li>FAQ</li>
						<li>Get in touch</li>
						<li><a>Login</a></li>
						<li><a>Sign Up</a></li>
					</ul>
				</nav>
				<div className="landing">

				</div>

				<div className="features">

				</div>

				<div className="demo">

				</div>

				<div className="about">

				</div>

				<div className="footer">

				</div>

			</div>
		);
	}
}

export default Showcase;