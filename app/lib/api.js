export async function sendContactForm(data) {
	try {
		const response = await fetch("/api/email", {
			method: "POST",
			body: data,
		});

		if (!response.ok) {
			throw new Error(`response status: ${response.status}`);
		}
	} catch (err) {
		alert("Oops! Something went wrong. Please try again or give us a call");
	}
}
