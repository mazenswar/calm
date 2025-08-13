import React from "react";
import "./ketamine.scss";
import CTAButton from "../components/CTAButton";
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
				url: "https://calmtherapy.center/social/ss.png",
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
		images: ["https://calmtherapy.center/social/ss.png"],
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
					<h1>Ketamine-assisted Psychotherapy Therapy in NY, NJ, and PA</h1>
					<p>
						Break through depression, anxiety, or OCD with Ketamine-Assisted
						Psychotherapy (KAP). Safe, virtual treatment led by a licensed
						psychologist. Serving adults in New York, New Jersey, and
						Pennsylvania.
					</p>
					<CTAButton />
				</div>
			</section>

			<section className="ketamine__what">
				<div className="content">
					<h2>What is Ketamine-Assisted Psychotherapy?</h2>
					<p>
						KAP combines low-dose ketamine with structured psychotherapy to
						support emotional healing and inner transformation. Research shows
						it may help people with depression, anxiety, PTSD, and
						OCD—especially when traditional therapy hasn{"'"}t been enough.
					</p>
					<p>The medicine opens a window. Therapy helps you walk through it.</p>
				</div>
			</section>

			<section className="ketamine__process">
				<div className="content">
					<h2>How It Works</h2>
					<ol>
						<li>
							<strong>Medical Screening</strong>
							<p>
								We partner with Journey Clinical to review your history and
								prescribe ketamine if appropriate.
							</p>
						</li>
						<li>
							<strong>Preparation Sessions</strong>
							<p>
								Build trust and prepare the groundwork before beginning KAP.
								Learn how to navigate your experience safely, with 6 sessions
								before dosing.
							</p>
						</li>
						<li>
							<strong>Dosing</strong>
							<p>
								Held virtually with a therapist present throughout. In select
								cases, in-person sessions may be available.
							</p>
						</li>
						<li>
							<strong>Integration</strong>
							<p>
								Make sense of what came up and apply insights to everyday life.
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
						<li>
							You{"'"}ve tried talk therapy or medication but still feel stuck
						</li>
						<li>You struggle with anxiety, depression, OCD, or trauma</li>
						<li>You{"'"}re open to non-ordinary states as part of healing</li>
						<li>You want to explore yourself more deeply, with support</li>
					</ul>
					<p>We{"'"}ll help you assess whether this is a good fit.</p>
				</div>
			</section>

			<section className="ketamine__cta">
				<div className="content">
					<h2>Start Your Ketamine Therapy Journey</h2>
					<p>
						We work with adults across NY, NJ, and PA. You don{"'"}t have to go
						through this alone. Book a consult and see if KAP is right for you.
					</p>

					<CTAButton text="Free 15-Minute Consult" subtext="" />
				</div>
			</section>
		</main>
	);
}

export default KetamineSEOLanding;
