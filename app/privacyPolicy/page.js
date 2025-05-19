import Link from "next/link";
import React from "react";

function PrivacyPolicy() {
	return (
		<main id="privacy-policy">
			<section className="pp-container">
				<h1 className="center-title">Privacy Policy</h1>
				<p>Last updated: May 19th, 2025</p>
				<p>
					Center for Anxiety and Life Management PLLC ("CALM Therapy", "we",
					"us", or our") respects your privacy. This Privacy Policy describes
					how we handle information collected through our website,{" "}
					<a
						href="https://calmtherapy.center"
						target="_blank"
						rel="noopener noreferrer"
					>
						calmtherapy.center
					</a>
					.
				</p>

				<h2>Information We Collect</h2>
				<p>
					We do not collect personal information unless you voluntarily submit
					it through our contact form. The form collects your name, email
					address, phone number, and message. This information is sent directly
					to a HIPAA-compliant email inbox and is not stored elsewhere or shared
					with third parties.
				</p>

				<h2>Analytics</h2>
				<p>
					We use Google Analytics to understand how visitors use our site.
					Google Analytics collects basic usage data such as your browser type,
					device, pages visited, and time spent on pages. This data is
					anonymized and helps us improve our website. You can learn more about
					how Google handles this data{" "}
					<a
						href="https://policies.google.com/privacy"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					.
				</p>

				<h2>Cookies</h2>
				<p>
					We do not use cookies directly. However, Google Analytics may use
					cookies to provide analytics functionality. You can manage cookie
					settings in your browser.
				</p>

				<h2>Data Sharing and Security</h2>
				<p>
					We do not sell, rent, or share your personal information with third
					parties. Information submitted through the contact form is handled
					securely via encrypted, HIPAA-compliant email. While we strive to
					protect your information, no method of transmission over the Internet
					is 100% secure.
				</p>

				<h2>Children's Privacy</h2>
				<p>
					This website is not intended for individuals under the age of 13. We
					do not knowingly collect personal information from children.
				</p>

				<h2>Changes to This Policy</h2>
				<p>
					We may update this Privacy Policy from time to time. Any updates will
					be posted on this page with a revised “last updated” date.
				</p>

				<h2>Contact Us</h2>
				<p>
					If you have any questions about this Privacy Policy, please contact us
					at{" "}
					<Link className="link" href="mailto:tsingh@calmtherapy.center">
						tsingh@calmtherapy.center
					</Link>
				</p>
			</section>
		</main>
	);
}

export default PrivacyPolicy;
