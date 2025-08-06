import Link from "next/link";
import React from "react";
import "./fees.scss";

function Fees() {
	return (
		<div className="f-container" id="fees">
			<div className="content">
				<h2 className="center-title linebreak">Therapy Fees &amp; Payment</h2>
				<p>
					45-min sessions:<strong> $250</strong>
				</p>
				<p>
					Initial intake (75 min): <strong>$420</strong>
				</p>
				<p className="note">
					Private-pay practice. SuperBills provided for out-of-network
					reimbursement. Limited sliding-scale spots based on financial need.
				</p>
				<Link href="/fees-and-insurance" className="link">
					Full fees &amp; insurance details&nbsp;→
				</Link>
			</div>
		</div>
	);
}

export default Fees;
