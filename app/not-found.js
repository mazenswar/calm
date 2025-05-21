import Link from "next/link";
import "./scss/components/_errors.scss";

export default function NotFound() {
	return (
		<main id="not-found">
			<section className="error-section">
				<h1 className="center-title">Oops, we could not find this page</h1>
				<div>
					<Link href="/" className="link">
						Go back to Home
					</Link>
				</div>
			</section>
		</main>
	);
}
