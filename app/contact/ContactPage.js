"use client";
import React, { useState } from "react";
import Form from "./Form";
import ErrorPage from "./ErrorPage";
import SuccessPage from "./SuccessPage";
import NextStepsPage from "./NextStepsPage";

function ContactPage() {
	const [formState, setFormState] = useState("idle");

	return (
		<>
			{formState === "idle" && <Form setFormState={setFormState} />}
			{formState === "success" && <SuccessPage />}
			{formState === "next-steps" && <NextStepsPage />}
			{formState === "error" && <ErrorPage />}
		</>
	);
}

export default ContactPage;
