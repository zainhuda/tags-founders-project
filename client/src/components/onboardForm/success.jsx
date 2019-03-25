import React from 'react';
import Button from '../button';
import {Link} from 'react-router-dom';

// import styles
import './success.css';

const Success = () => {
	return(
		<div className="onboard-success-container">
			<h1 className="success-message"> You're all set! </h1>
			<Link to="/explore">
				<Button className={"ui primary button"} msg={"EXPLORE"} />
			</Link>
		</div>
	)
}

export default Success;
