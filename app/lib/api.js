export async function sendContactForm(data) {
	try {
		const response = await fetch("/api/email", {
			method: "POST",
			body: data,
		});

		const result = await response.json();

		if (!response.ok || !result.success) {
			console.error("Backend error:", result?.error || "Unknown error");
			throw new Error(result?.error || "Email failed");
		}
	} catch (err) {
		console.error("Client-side error:", err);
		alert("Oops! Something went wrong. Please try again or call us directly.");
	}
}
