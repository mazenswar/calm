import React from "react";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import "../scss/components/_contact.scss";

export const metadata = {
	title: "Book a Free Consultation | CALM Therapy",
	description:
		"Ready to take the next step? Book your complimentary 15-minute consultation and discover how CALM Therapy can support your well-being and personal growth. Serving adults virtually in NJ, NY, and PA.",
	alternates: {
		canonical: "https://calmtherapy.center/contact",
	},
	openGraph: {
		title: "Book a Free Consultation | CALM Therapy",
		description:
			"Schedule a complimentary 15-minute consultation to see if we're a good fit. Serving adults virtually in NJ, NY, and PA.",
		url: "https://calmtherapy.center/contact",
		siteName: "CALM Therapy",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Book a Free Consultation | CALM Therapy",
		description:
			"Schedule a free 15-minute virtual consultation to explore how therapy can support your well-being.",
	},
};

function Contact() {
	return (
		<main id="contact">
			<section className="booking-form">
				<ContactText />
				<ContactForm />
			</section>
		</main>
	);
}

export default Contact;
