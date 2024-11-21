import React from "react";

function Fees() {
	return (
		<div className="f-container" id="fees">
			<h1 className="center-title linebreak">
				Online Therapy Fees {"\n"}(sliding scale available)
			</h1>
			<h3 className="linebreak">
				We do not accept insurance so that we can provide the highest quality
				services, but you may still be able to get reimbursed for our therapy
				sessions through your insurance depending on your out-of-network
				benefites. {"\n"}For more information visit our{" "}
				<a href="/insurance">Insurance Page</a>.
			</h3>
			<div className="f">
				<div className="fee-container">
					<h3>45-minute session</h3>
					<h2>$220</h2>
				</div>
				<div className="fee-container">
					<h3>One-time 75-minute intake session</h3>
					<h2>$365</h2>
				</div>
			</div>
		</div>
	);
}

export default Fees;
