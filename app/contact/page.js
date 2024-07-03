import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
	return (
		<main id="contact">
			<section className="booking-form">
				<h1 className="center-title">Book a free 30 minute consultation</h1>
				<ContactForm />
				<h1>Or Call</h1>
				<a href="tel:9019917301">
					<h2>(908) 991-7301</h2>
				</a>
			</section>
		</main>
	);
}

export default Contact;
