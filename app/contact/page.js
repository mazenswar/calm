"use client";
import React, { useState } from "react";

import FormPage from "./FormPage";
import NextStepsPage from "./NextStepsPage";
import "./styles/contact-page.scss";
import "./styles/follow-up.scss";
import ErrorPage from "./ErrorPage";

function Contact() {
	const [formState, setFormState] = useState("idle");
	return (
		<>
			{formState === "idle" && <FormPage setFormState={setFormState} />}
			{formState === "next-steps" && <NextStepsPage />}
			{formState === "error" && <ErrorPage />}
		</>
	);
}

export default Contact;
