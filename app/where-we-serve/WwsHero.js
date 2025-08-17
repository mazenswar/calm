import React from "react";
import USMap from "./USMap";
import "./wws__hero.scss";
import Link from "next/link";

function WwsHero() {
	return (
		<section className="wwsHero__section">
			<div className="content">
				<div className="text">
					<h1 className="center-title">
						Online Therapy Available in 44 U.S. States and Territories
					</h1>
					<p>
						We provide virtual therapy to adults across the country, including
						clients in <strong>New York</strong>, <strong>New Jersey</strong>,
						and <strong>Pennsylvania</strong> through our direct licenses, and
						in{" "}
						<Link className="link" href="/where-we-serve#states">
							41 additional states and territories
						</Link>{" "}
						through PSYPACT authorization.
					</p>
				</div>
				<USMap />
			</div>
		</section>
	);
}

export default WwsHero;
