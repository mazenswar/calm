import React from "react";
import ContactText from "./ContactText";
import ContactForm from "./ContactForm";

function Form({ setFormState }) {
	return (
		<main id="contact">
			<section className="booking-form">
				<ContactText />
				<ContactForm setFormState={setFormState} />
			</section>
		</main>
	);
}

export default Form;
