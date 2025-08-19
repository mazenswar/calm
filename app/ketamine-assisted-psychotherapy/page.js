import React from "react";
import "./ketamine.scss";

import ClientPortalCTA from "../components/ClientPortalCTA";
import Link from "next/link";

export const metadata = {
	title:
		"Ketamine Therapy Online | CALM Therapy - Intentional Healing with KAP",
	description:
		"Looking for online ketamine therapy? Discover how CALM Therapy offers safe, trauma-informed KAP to help you move through anxiety, OCD, and emotional stuckness.",
	openGraph: {
		title:
			"Ketamine Therapy Online | CALM Therapy - Intentional Healing with KAP",
		description:
			"Explore online ketamine-assisted psychotherapy (KAP) at CALM Therapy. Virtual sessions, licensed prescribers, and integrative support for deep transformation.",
		url: "https://calmtherapy.center/ketamine-assisted-psychotherapy",
		type: "website",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy social preview image",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ketamine Therapy Online | CALM Therapy",
		description:
			"Safe, evidence-based ketamine-assisted psychotherapy (KAP) from the comfort of home. CALM Therapy offers online support for deep emotional healing.",
		images: ["https://calmtherapy.center/social/ss.webp"],
	},
	alternates: {
		canonical: "https://calmtherapy.center/ketamine-assisted-psychotherapy",
	},
};
function KetamineSEOLanding() {
	return (
		<main id="ketamine__seo__page">
			<section className="ketamine__hero">
				<div className="content">
					<h1>Ketamine-Assisted Psychotherapy Available in 43 U.S. States</h1>
					<p>
						Break through depression, anxiety, or OCD with Ketamine-Assisted
						Psychotherapy (KAP). Safe, virtual treatment led by a licensed
						psychologist. Serving adults across{" "}
						<Link href="/where-we-serve" className="link">
							43 U.S. states and jurisdictions
						</Link>{" "}
						via secure online sessions.
					</p>
					<ClientPortalCTA />
				</div>
			</section>

			<section className="ketamine__what">
				<div className="content">
					<h2>What is Ketamine-Assisted Psychotherapy?</h2>
					<p>
						KAP combines low-dose ketamine with structured psychotherapy to
						support emotional healing and inner transformation. Research shows
						it may help people with depression, anxiety, PTSD, and OCD,
						especially when other approaches haven{"'"}t led to lasting change.
					</p>
					<p>The medicine opens a window. Therapy helps you walk through it.</p>
				</div>
			</section>

			<section className="ketamine__process">
				<div className="content">
					<h2>How It Works</h2>
					<ol>
						<li>
							<strong>Foundational Therapy Sessions</strong>
							<p>
								Before beginning ketamine work, clients complete at least six
								foundational sessions to build trust, explore intentions, and
								prepare emotionally and practically for dosing.
							</p>
						</li>
						<li>
							<strong>Medical Screening</strong>
							<p>
								We partner with Journey Clinical to conduct a medical
								evaluation. If approved, they prescribe ketamine lozenges and
								handle all medical follow-ups.
							</p>
						</li>
						<li>
							<strong>Dosing Sessions</strong>
							<p>
								Held virtually with your therapist present via secure video. A
								support person must be home during the session. Most clients
								complete eight dosing sessions.
							</p>
						</li>
						<li>
							<strong>Integration Sessions</strong>
							<p>
								We meet after each dose (typically within 24–72 hours) to
								process insights, support meaning-making, and apply the
								experience to your healing work.
							</p>
						</li>
						<li>
							<strong>Ongoing Support</strong>
							<p>
								After the initial series, clients may return for booster
								sessions every 6-8 weeks and continue therapy as needed to
								support long-term integration.
							</p>
						</li>
					</ol>
				</div>
			</section>

			<section className="ketamine__virtual">
				<div className="content">
					<h2>Fully Virtual, Compassionately Guided</h2>
					<p>
						You can begin KAP from the comfort of your home. Our sessions are
						held securely over video, and a trusted support person must be
						present for safety. We offer a calm, structured environment to help
						you go inward safely.
					</p>
				</div>
			</section>

			<section className="ketamine__eligibility">
				<div className="content">
					<h2>Is Ketamine Therapy Right for You?</h2>
					<ul>
						<li>You{"'"}ve tried therapy or medication but still feel stuck</li>
						<li>You{"'"}re addressing anxiety, depression, OCD, or trauma</li>
						<li>
							You{"'"}re open to using altered states of consciousness as part
							of healing
						</li>
					</ul>
					<p>We{"'"}ll help you assess whether this is a good fit.</p>
				</div>
			</section>

			<section className="ketamine__cta">
				<div className="content">
					<h2>Start Your Ketamine Therapy Journey</h2>
					<p>
						We work with adults in{" "}
						<Link href="/where-we-serve" className="link">
							43 states and jurisdictions
						</Link>{" "}
						across the U.S. through PSYPACT and local licensure. You don{"'"}t
						have to go through this alone. Book a consult and see if KAP is
						right for you.
					</p>

					<ClientPortalCTA />
				</div>
			</section>
		</main>
	);
}

export default KetamineSEOLanding;
