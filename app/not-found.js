import Link from "next/link";

export default function NotFound() {
	return (
		<main id="not-found">
			<section className="error-section">
				<h1>404</h1>
				<h2 className="center-title">Oops, we could not find this page</h2>
				<div>
					<Link href="/">Go back to Home</Link>
				</div>
			</section>
		</main>
	);
}
