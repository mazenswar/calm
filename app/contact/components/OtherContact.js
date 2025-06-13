import Link from "next/link";
import React from "react";

function OtherContact() {
	return (
		<section className="other-contact">
			<div className="content">
				<h2>Have a question or want to collaborate?</h2>
				<p>
					For general inquiries or professional partnerships, please email us
					directly at{" "}
					<Link className="link" href="mailto:info@calmtherapy.center">
						info@calmtherapy.center
					</Link>
				</p>
			</div>
		</section>
	);
}

export default OtherContact;

// 	•	Heading: “Have a question or want to collaborate?”
// 	•	Line of text:
// “For general inquiries or professional partnerships, email us directly at info@contherapy.center.”
