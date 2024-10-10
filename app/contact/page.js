import React from "react";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import Calendly from "../components/Calendly";
import CalendlyCal from "../components/CalendlyCal";

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
					<CalendlyCal />
					{/* <ContactForm /> */}
				</div>
				<h2 className="center-title title-text">Or</h2>
				<div className="or">
					<div className="or-content">
						<h2 className="title-text">Call</h2>
						<a href="tel:9145704196">
							<h2>(914) 570-4196</h2>
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
