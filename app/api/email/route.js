import { NextResponse } from "next/server";
import { transporter } from "../../config/nodemailer";
import { clientAutoResponse } from "@/app/lib/clientAutoResponseTemplate";
import { contactFormSubmissionTemplate } from "@/app/lib/contactFormSubmissionTemplate";
import { errorEmailTemplate } from "@/app/lib/errorEmailTemplate";

export const POST = async (request) => {
	const formData = await request.formData();

	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");
	const phoneNumber = formData.get("phoneNumber");
	const state = formData.get("state");
	const data = { name, email, message, phoneNumber, state };
	try {
		const contactFormSubmissionOptions = contactFormSubmissionTemplate(data);
		await transporter.sendMail(contactFormSubmissionOptions);
	} catch (error) {
		console.error("Error sending admin notification:", error);
		const errorEmailOptions = errorEmailTemplate(error);
		await transporter.sendMail(errorEmailOptions);
		return NextResponse.status(500).json({
			success: false,
			error: "Could not send message to CALM Therapy",
		});
	}

	try {
		const clientAutoResponseOptions = await clientAutoResponse({
			email,
			name,
		});
		await transporter.sendMail(clientAutoResponseOptions);
	} catch (error) {
		console.error("Error sending client auto-response:", error);
		const errorEmailOptions = errorEmailTemplate(error);
		await transporter.sendMail(errorEmailOptions);
		// But don't return error here, let the flow continue
	}

	return NextResponse.json({ success: true, message: "Emails processed" });
};
