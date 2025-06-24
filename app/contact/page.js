import React from "react";

import "./styles/contact-page.scss";
import "./styles/follow-up.scss";

import BookingSection from "./components/BookingSection";
import OtherContact from "./components/OtherContact";

function Contact() {
	return (
		<main id="contact">
			<BookingSection />
			<OtherContact />
		</main>
	);
}

export default Contact;
