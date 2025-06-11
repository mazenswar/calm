////////////////// ERROR EMAIL

export async function errorEmailTemplate(error) {
	return {
		from: process.env.INFO_EMAIL,
		to: process.env.INFO_EMAIL,
		subject: "CALM Therapy Form Submission Error",
		text: `There was an error processing a form submission:\n\n${error.message}`,
		html: `<p>There was an error processing a form submission:</p><pre>${error.stack}</pre>`,
	};
}
