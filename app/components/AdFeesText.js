import Link from "next/link";
import React from "react";

function AdFeesText() {
	return (
		<div className="text">
			<p className="strong">We{"'"}re an out-of-network provider</p>
			<p>
				This allows us to focus on high-quality, personalized care without the
				constraints of insurance. We offer transparent pricing and have a
				limited number of sliding scale spots available based on financial need.
				You{"'"}ll receive a receipt (called a superbill) after each session to
				submit to your insurance for potential reimbursement. For more
				infomation please visit our{" "}
				<Link className="link" href="/insurance">
					Fees & Insurance
				</Link>{" "}
				page
			</p>
		</div>
	);
}

export default AdFeesText;
