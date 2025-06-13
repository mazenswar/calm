import Link from "next/link";
import React from "react";

function ErrorPage() {
	return (
		<main id="form-error">
			<section>
				<div className="content">
					<h1>Sorry something went wrong</h1>
					<p>
						Please{" "}
						<Link href="/contact" className="link">
							try again
						</Link>{" "}
						or email use directly{" "}
						<Link className="link" href="mailto:info@calmtherapy.center">
							info@calmtherapy.center
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}

export default ErrorPage;
