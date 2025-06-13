import React from "react";
import BookingSection from "./components/BookingSection";
import OtherContact from "./components/OtherContact";

function FormPage({ setFormState }) {
	return (
		<main id="form-page">
			<BookingSection setFormState={setFormState} />
			<OtherContact />
		</main>
	);
}

export default FormPage;
