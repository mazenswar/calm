import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
	return (
		<main id="contact">
			<section className="booking-form">
				<h1 className="center-title">Book a 30 minute consultation</h1>
				<ContactForm />
				<h1>Or Call</h1>
				<a href="tel:8888888888">
					<h2>888-888-8888</h2>
				</a>
			</section>
		</main>
	);
}

export default Contact;
