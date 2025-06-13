import React from "react";

function Fees() {
	return (
		<div className="f-container" id="fees">
			<div className="content">
				<h2 className="center-title linebreak">Therapy Fees</h2>
				<h4 className="linebreak">
					We do not accept insurance in order to offer the highest quality care
					without compromise. However, you may still be eligible for
					reimbursement through your insurance provider, depending on your
					out-of-network benefits. {"\n\n"}For more details, visit our{" "}
					<a href="/insurance">Fees & Insurance Page</a>.
				</h4>
			</div>
		</div>
	);
}

export default Fees;
