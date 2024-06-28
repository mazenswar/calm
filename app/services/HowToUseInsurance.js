import React from "react";

function HowToUseInsurance() {
	return (
		<section id="insurance-section">
			<h1 className="center-title">Insurance</h1>
			<h3 className="subtext">
				I am an out-of-network provider, but you still may be able to use
				insurance benefits to help cover the costs of your session.{" "}
			</h3>
			<h1 className="center-title">
				How to use Out-Of-Network insurance benefits
			</h1>
			<h3 className="subtext">
				Some insurance plans offer out-of-network benefits, which means you
				initially pay for your therapy services and then submit a form to get
				reimbursed a percentage of the fee.
			</h3>
			<div className="steps">
				<div className="step-container">
					<h2>Step 1:</h2>
					<p>
						Contact your insurance and share my business info to make sure they
						will offer out-of-network reimbursement benefits.
					</p>
				</div>
				<div className="step-container">
					<h2>Step 2:</h2>
					<p>
						A {'"'}superbill{'"'} is the paperwork you submit to your insurance
						to get reimbursed for services. I{"'"}ll share one with you on a
						regular basis for you to send to your insurance. More info below.
					</p>
				</div>
				<div className="step-container">
					<h2>Step 3:</h2>
					<p>
						Contact your insurance and share my business info to make sure they
						will offer out-of-network reimbursement benefits.
					</p>
				</div>
			</div>
		</section>
	);
}

export default HowToUseInsurance;
