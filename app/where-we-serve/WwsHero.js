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
						Online Therapy Available in Over 40 States
					</h1>
					<p>
						We provide online therapy to adults across the country, including
						clients in <strong>New York</strong>, <strong>New Jersey</strong>,
						and <strong>Pennsylvania</strong> through our direct licenses, and
						virtually in{" "}
						<Link className="link" href="/where-we-serve#states">
							41 other states
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
