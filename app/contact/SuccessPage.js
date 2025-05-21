import "../scss/components/_errors.scss";

export default function SuccessPage() {
	return (
		<main className="success-page">
			<div className="container">
				<h1 className="success-title">Thank you for reaching out</h1>
				<p className="success-text">
					We{"'"}ve received your message and will get back to you within 1
					business day.
				</p>
				<p className="success-text">
					In the meantime, feel free to explore more about our{" "}
					<a href="/services" className="link">
						services
					</a>
					,{" "}
					<a href="/faq" className="link">
						FAQs
					</a>
					, or{" "}
					<a href="/resources" className="link">
						free resources
					</a>
					.
				</p>
				<a href="/" className="success-button">
					Return to Homepage
				</a>
			</div>
		</main>
	);
}
