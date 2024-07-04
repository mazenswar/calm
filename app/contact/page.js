import React from "react";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

function Contact() {
	return (
		<main id="contact">
			<section className="booking-form">
				<h1 className="center-title">Book a free 15-minute consultation</h1>
				<div className="contact-container">
					<ContactText />
					<ContactForm />
				</div>
				<h1>Or Call</h1>
				<a href="tel:9089917301">
					<h2>(908) 991-7301</h2>
				</a>
			</section>
		</main>
	);
}

export default Contact;
