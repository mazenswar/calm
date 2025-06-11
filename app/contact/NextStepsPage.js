import React from "react";
import "../scss/components/_errors.scss";
function NextStepsPage() {
	return (
		<main id="next-steps">
			<section>
				<h1>Thank you for reaching out</h1>
				<p>
					We{"'"}ve received your consultation request and just sent you an
					email with the next steps.
				</p>
				<p>
					If you don{"'"}t see the email in your inbox within a few minutes,
					please check your spam or promotions folder.
				</p>
				<p>
					Feel free to reach out to us at{" "}
					<a href="mailto:info@calmtherapy.center" className="link">
						info@calmtherapy.center
					</a>{" "}
					if you have any questions in the meantime.
				</p>
			</section>
		</main>
	);
}

export default NextStepsPage;
