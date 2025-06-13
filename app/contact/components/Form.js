"use client";
import React, { useState } from "react";
import { sendContactForm } from "../../lib/api";
import Select from "../../components/SelectNoSSR";
import Spinner from "@/app/components/Spinner";

const options = [
	{ value: "NY", label: "New York" },
	{ value: "PA", label: "Pennsylvania" },
	{ value: "NJ", label: "New Jersey" },
];

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
function Form({ setFormState }) {
	const [isLoading, setIsLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");
	const [state, setState] = useState({ value: "NY", label: "New York" });

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
		///////// LOADING
		setIsLoading(true);
		if (!isValidPhone) {
			alert("Please enter a valid 10-digit U.S. phone number.");
			return;
		}
		const formData = new FormData(e.target);
		try {
			await sendContactForm(formData);
			//////////// Google Tag Trigger //////////////////////
			if (typeof window !== "undefined") {
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: "contact_form_submitted",
				});
			}
			//////////// Google Tag Trigger //////////////////////
			setFormState("next-steps");
		} catch (e) {
			console.log(e);
			setFormState("error");
		} finally {
			///////// LOADING
			setIsLoading(false);
		}
	}

	return (
		<div className="form-wrapper">
			{isLoading && <Spinner />}
			<form onSubmit={handleSubmit} disabled={isLoading}>
				<h3 className="center-title">Free 15-minute consultation</h3>
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

					<ErrorMessage
						condition={touched && touched.phoneNumber && !phoneNumber}
					/>
				</div>

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

				<div className="input-container">
					<label htmlFor="message">{}</label>

					<textarea
						value={message}
						onChange={({ target }) => setMessage(target.value)}
						onBlur={handleBlur}
						name="message"
						id="message"
						required
						aria-required
						placeholder={
							"Please share a bit about what brings you to therapy at this time"
						}
					/>
					<ErrorMessage condition={touched && touched.message && !message} />
				</div>

				<input disabled={isLoading} type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default Form;
