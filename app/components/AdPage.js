import React from "react";
import "../scss/components/_ad-pages.scss";
import CTAButton from "./CTAButton";
import Link from "next/link";

function AdPage({ children }) {
	return (
		<main className="ad-page">
			<section>
				<div className="container">
					<h1>
						We{"'"}re Happy You{"'"}re Here
					</h1>
					{children}
					<CTAButton text={"Get Started"} />
					<div className="learn-more">
						<h2>Want to Learn More?</h2>
						<div className="links-container">
							<Link className="link" href="/about">
								About
							</Link>
							<Link className="link" href="/insurance">
								Fees & Insurance
							</Link>
							<Link className="link" href="/specialities">
								Specialities
							</Link>
							<Link className="link" href="/faq">
								FAQ
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default AdPage;
