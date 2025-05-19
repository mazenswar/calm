"use client";
import React, { useState } from "react";
import { sendContactForm } from "../lib/api";
import Select from "../components/SelectNoSSR";
import { useRouter } from "next/navigation";

const options = [
	{ value: "NY", label: "New York" },
	{ value: "PA", label: "Pennsylvania" },
	{ value: "NJ", label: "New Jersey" },
];

const contactOptions = [
	{ value: "consult", label: "I'd like to book a consultation" },
	{
		value: "collab",
		label: "I'm reaching out about a professional collaboration",
	},
	{ value: "question", label: "I have a question" },
];

const reasonTexts = {
	consult: {
		title: "Book a Free 15-Minute Consultation",
		text: "At this time, we're only able to provide virtual therapy to clients located in New York, New Jersey, and Pennsylvania.If that's you, we'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.",
		textArea:
			"Please share a bit about what brings you to therapy at this time",
	},
	collab: {
		title: "Interested in Collaborating?",
		text: "If you're a fellow clinician, wellness provider, or organization interested in collaborating, we'd love to connect. Let us know what you're thinking and we'll follow up soon.",
		textArea: "Please share a little bit about the proposed collaboration",
	},
	question: {
		title: "Have a Question?",
		text: "We're happy to clarify anything about our services, availability, fees, or how therapy works. Drop us a message and we'll do our best to respond within 1 business day.",
		textArea: "Please share your question here",
	},
};

//////////////////////////////////////////////////

function formatPhoneNumber(input) {
	const cleaned = ("" + input.value).replace(/\D/g, "");
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		return `(${match[1]}) ${match[2]}-${match[3]}`;
	}
	return null;
}

function ErrorMessage({ condition }) {
	if (condition) {
		return <p className="error">* Required</p>;
	}
	return <></>;
}

/////////////////////////////////////////////
function ContactForm() {
	// const [state, setState] = useState(initState);
	const router = useRouter();
	const [reason, setReason] = useState({
		value: "consult",
		label: "I'd like to book a consultation",
	});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");
	const [state, setState] = useState({ value: "NY", label: "New York" });
	const data = {
		name,
		email,
		phoneNumber,
		message,
		state,
	};
	const [touched, setTouched] = useState({
		name: false,
		email: false,
		phoneNumber: false,
		message: false,
	});
	const isValidPhone =
		/^\(?([2-9][0-9]{2})\)?[-.●]?([2-9][0-9]{2})[-.●]?([0-9]{4})$/.test(
			phoneNumber
		);

	function resetForm() {
		setEmail("");
		setName("");
		setPhoneNumber("");
		setState({ value: "NY", label: "New York" });
		setMessage("");
	}

	function handleBlur({ target }) {
		setTouched((prev) => setTouched({ ...prev, [target.name]: true }));
		if (target.name === "phoneNumber") {
			const val = formatPhoneNumber(target);
			if (val) {
				setState((prev) => ({
					...prev,
					values: { ...prev.values, [target.name]: val },
				}));
			}
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (reason.value === "consult" && !isValidPhone) {
			alert("Please enter a valid 10-digit U.S. phone number.");
			return;
		}
		const formData = new FormData(e.target);
		try {
			await sendContactForm(formData);
			router.push("/success");
		} catch (e) {
			console.log(e);
			alert(
				"Oops, something went wrong. Please try again later or email us directly"
			);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-container">
				<label htmlFor="state">Reason to Contact</label>
				<Select
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
						}),
					}}
					value={reason}
					options={contactOptions}
					id={"reason"}
					name="reason"
					onChange={(option) => setReason(option)}
					required
				/>
				<ErrorMessage condition={touched && touched.state && !state} />
			</div>

			<div className="microcopy">
				<h2>{reasonTexts[reason.value].title}</h2>
				<p>{reasonTexts[reason.value].text}</p>
			</div>

			<div className="input-container">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					value={name}
					onChange={({ target }) => setName(target.value)}
					onBlur={handleBlur}
					name="name"
					id="name"
					required
					aria-required
				/>
				<ErrorMessage condition={touched && touched.name && !name} />
			</div>
			<div className="input-container">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					value={email}
					onChange={({ target }) => setEmail(target.value)}
					onBlur={handleBlur}
					name="email"
					id="email"
					required
					aria-required
				/>
				<ErrorMessage condition={touched && touched.email && !email} />
			</div>
			{reason.value === "consult" && (
				<div className="input-container">
					<label htmlFor="telephone">Phone Number</label>

					<input
						type="tel"
						value={phoneNumber}
						onChange={({ target }) => setPhoneNumber(target.value)}
						onBlur={handleBlur}
						name="phoneNumber"
						id="phoneNumber"
						inputMode="numeric"
						placeholder="10-digit, U.S. only, for example 999-999-9999"
						maxLength="12"
						title="888-888-8888"
						required
						aria-required
					/>
					<p className="error">
						{!isValidPhone &&
							phoneNumber !== "" &&
							"* Please Enter a Valid US Number"}
					</p>
					<ErrorMessage
						condition={touched && touched.phoneNumber && !phoneNumber}
					/>
				</div>
			)}

			{reason.value === "consult" && (
				<div className="input-container">
					<label htmlFor="state">State</label>
					<Select
						styles={{
							control: (baseStyles, state) => ({
								...baseStyles,
							}),
						}}
						value={state}
						options={options}
						id={"state"}
						name="state"
						onChange={(option) => setState(option)}
						required
					/>
					<ErrorMessage condition={touched && touched.state && !state} />
				</div>
			)}
			<div className="input-container">
				<label htmlFor="message">{reasonTexts[reason.value].textArea}</label>

				<textarea
					value={message}
					onChange={({ target }) => setMessage(target.value)}
					onBlur={handleBlur}
					name="message"
					id="message"
					required
					aria-required
					// placeholder={}
				/>
				<ErrorMessage condition={touched && touched.message && !message} />
			</div>

			<input
				// disabled={!name || !phoneNumber || !message || !email}
				type="submit"
				value="Submit"
			/>
		</form>
	);
}

export default ContactForm;
