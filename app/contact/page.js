import React from "react";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import Calendly from "../components/Calendly";
import CalendlyCal from "../components/CalendlyCal";

export const metadata = {
	title: "Book a free consultation",
	description:
		"Information and links to schedule a free 15 minute consultation",
	keywords: "booking, appointments, consulation, complimentary",
};

function Contact() {
	return (
		<main id="contact">
			<section className="booking-form">
				<div className="contact-container">
					<ContactText />
					<CalendlyCal />
				</div>
			</section>
		</main>
	);
}

export default Contact;
