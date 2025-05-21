import Link from "next/link";
import "../scss/components/_errors.scss";

export default function SuccessPage() {
	return (
		<main id="success">
			<section className="container">
				<h1 className="success-title">Thank you for reaching out</h1>
				<p className="success-text">
					We{"'"}ve received your message and will get back to you within 1
					business day.
				</p>
				<p className="success-text">
					In the meantime, feel free to explore more about our{" "}
					<Link href="/about" className="link">
						About
					</Link>
					,{" "}
					<Link href="/faq" className="link">
						FAQs
					</Link>
					, or{" "}
					<Link href="/insurance" className="link">
						Fees & Insurance
					</Link>
					.
				</p>
				<Link href="/" className="success-button link">
					Return to Homepage
				</Link>
			</section>
		</main>
	);
}
