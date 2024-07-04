"use client";
import React, { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = {
	name: "",
	email: "",
	phoneNumber: "",
	message: "",
	state: "NY",
};

const initState = {
	values: initValues,
};

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
		return <p className="error">Required</p>;
	}
	return <></>;
}

/////////////////////////////////////////////
function ContactForm() {
	const [state, setState] = useState(initState);
	const [touched, setTouched] = useState({
		name: false,
		email: false,
		phoneNumber: false,
		message: false,
	});

	const { values } = state;

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

	function handleChange({ target }) {
		setState((prev) => ({
			...prev,
			values: { ...prev.values, [target.name]: target.value },
		}));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		await sendContactForm(formData);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-container">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}
					name="name"
					required
					aria-required
				/>
				<ErrorMessage condition={touched && touched.name && !values.name} />
			</div>
			<div className="input-container">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
					name="email"
					required
					aria-required
				/>
				<ErrorMessage condition={touched && touched.email && !values.email} />
			</div>
			<div className="input-container">
				<label htmlFor="telephone">Phone Number</label>
				<span className="subtext">
					10-digit, U.S. only, for example 999-999-9999
				</span>
				<input
					type="tel"
					value={values.phoneNumber}
					onChange={handleChange}
					onBlur={handleBlur}
					name="phoneNumber"
					placeholder="888-888-8888"
					maxLength="12"
					title="888-888-8888"
					required
					aria-required
				/>
				<ErrorMessage
					condition={touched && touched.phoneNumber && !values.phoneNumber}
				/>
			</div>
			<div className="input-container">
				<label htmlFor="state">State</label>
				<select
					value={values.state}
					onChange={handleChange}
					onBlur={handleBlur}
					name="state"
					required
					aria-required
				>
					<option value={"ny"}>New York</option>
					<option value={"pa"}>Pennsylvania</option>
				</select>
				<ErrorMessage condition={touched && touched.state && !values.state} />
			</div>
			<div className="input-container">
				<label htmlFor="message">Availability</label>
				<textarea
					value={values.message}
					onChange={handleChange}
					onBlur={handleBlur}
					name="message"
					required
					aria-required
					placeholder="Example: Tuesday: 8am-11am, Friday: 12pm-5pm"
				/>
				<ErrorMessage
					condition={touched && touched.message && !values.message}
				/>
			</div>

			<input
				disabled={
					!values.name ||
					!values.phoneNumber ||
					!values.message ||
					!values.email
				}
				type="submit"
				value="Submit"
			/>
		</form>
	);
}

export default ContactForm;
