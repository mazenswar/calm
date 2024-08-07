import React from "react";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

export const metadata = {
	title: "Book a free consultation",
	description: "contact form to schedule consultation",
};

function Contact() {
	return (
		<main id="contact">
			<section className="booking-form">
				<h1 className="center-title">Book a free 15-minute consultation</h1>
				<div className="contact-container">
					<ContactText />
					<ContactForm />
				</div>
				<h2 className="center-title title-text">Or</h2>
				<div className="or">
					<div className="or-content">
						<h2 className="title-text">Call</h2>
						<a href="tel:9089917301">
							<h2>(908) 991-7301</h2>
						</a>
					</div>
					<div className="or-content">
						<h2 className="title-text">Email</h2>
						<a href="mailto:tsingh@calmtherapy.center">
							<h2>tsingh@calmtherapy.center</h2>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Contact;
