import Link from "next/link";
import React from "react";

function Pricing() {
	return (
		<section className="pricing alt">
			<div className="content">
				<h2>Fees & Payment</h2>
				<p>
					<span className="label">45-min session:</span> <strong>$250</strong>
				</p>
				<p>
					<span className="label">Initial intake&nbsp;(75&nbsp;min):</span>{" "}
					<strong>$420</strong>
				</p>
				<p className="fine-print">
					Private-pay practice · SuperBills provided for out-of-network
					reimbursement. Sliding-scale spots available upon financial need.
				</p>
				<Link href="/fees-and-insurance" className="link">
					Full fees &amp; insurance details&nbsp;→
				</Link>
			</div>
		</section>
	);
}

export default Pricing;
