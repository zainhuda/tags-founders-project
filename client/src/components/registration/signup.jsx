import styles from "./signup.css";
import React, { Component } from 'react';
import input from "../input.jsx";

class SignUp extends Component {
	render() {
		return(
			<div className={"MAIN"}>

				<div>
					<h1>Project X</h1>
					<div>
						<center/>
							<center><h2>Let's Get Started!</h2></center>
						<div className={"GetStarted-table"}>

							<div className={"col"}>

								<div className={"table"}>

									<h2> Individual </h2>

									<div className={"description"}>


										<span> Use your company provided access code to make an account:</span>
										<input className={"ui input"} msg={"fuck you"}/>


									</div>
								</div>
							</div>



							<div className={"col"}>

								<div className={"table"}>

									<h2> Company </h2>
									<div className={"description"}>

										<span> Register for a new company account:</span>


										



									</div>

								</div>


							</div>




						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default SignUp;
