import Link from "next/link";
import React from "react";
import tanyaImgTwo from "./assets/images/tanya-about.webp";
import Image from "next/image";
import aboutOne from "./assets/images/about-section-1.webp";
import aboutTwo from "./assets/images/section-2.webp";
import aboutThree from "./assets/images/section-3.webp";
import aboutFour from "./assets/images/section-4-alt.webp";
import aboutFive from "./assets/images/section-5.webp";
import aboutSix from "./assets/images/section-6-alt.webp";
import "./about.scss";

export const metadata = {
	title: "About | CALM Therapy (Center for Anxiety and Life Management)",
	description:
		"Learn about CALM Therapy's integrative approach to mental health. Dr. Tanya Singh blends evidence-based psychology with Eastern wisdom traditions to help thoughtful adults find clarity, healing, and self-connection.",
	openGraph: {
		title: "About | CALM Therapy",
		description:
			"Discover CALM Therapy's unique approach to healing—merging science and spirituality to support your inner growth. Led by Dr. Tanya Singh, clinical psychologist.",
		url: "https://calmtherapy.center/about",
		siteName: "CALM Therapy",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy logo and branding",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "About | CALM Therapy",
		description:
			"Meet Dr. Tanya Singh, co-founder of CALM Therapy. Explore our unique, integrative approach blending Western psychology with Eastern spiritual insight.",
		images: ["https://calmtherapy.center/social/ss.webp"],
	},
	alternates: {
		canonical: "https://calmtherapy.center/about",
	},
};

function About() {
	return (
		<main id="about">
			{/* SECTION 1: Header */}

			<section className="about-header">
				<div className="content">
					<div className="header-content-container">
						<div className="intro-card">
							<div className="img-container">
								<Image
									src={tanyaImgTwo.src}
									alt="tanya headshot"
									width={360}
									height={360}
									sizes="(max-width: 768px) 250px, 360px"
									style={{ width: "100%", height: "auto" }}
									priority
								/>
							</div>

							<div className="intro-text">
								<h1>Tanya Singh, PhD</h1>
								<h3>Director & Co-Founder</h3>
								<h3>Licensed Clinical Psychologist</h3>
							</div>
						</div>
						<div className="welcome-message">
							<h3>For the Thoughtful, the Searching, and the Stuck</h3>
							<p>
								I offer integrative therapy for adults navigating anxiety,
								burnout, spiritual confusion, perfectionism, or depression. If
								you
								{"'"}re feeling stuck, disconnected, or unsure how to move
								forward, therapy can help you return to what{"'"}s most
								essential. I work with clients across New Jersey, New York, and
								Pennsylvania through online therapy that is both accessible and
								deeply personal.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="about-sections">
				<div className="section-block">
					<div className="content">
						<div className="img-container">
							<Image
								src={aboutOne.src}
								alt="An Integrative Approach to Therapy illustration"
								width={360}
								height={360}
								sizes="(max-width: 768px) 250px, 360px"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div className="text">
							<h3>An Integrative Approach to Therapy</h3>
							<p>
								What I offer is a grounded, integrative approach to therapy that
								brings together the rigor of evidence-based Western psychology
								with the wisdom of Eastern traditions like Buddhism, Taoism, and
								Hinduism. I don{"'"}t promise spiritual experiences. But I do
								know the power of turning toward your inner world with honesty,
								humility, and courage.
							</p>
						</div>
					</div>
				</div>

				<div className="section-block alt">
					<div className="content">
						<div className="img-container">
							<Image
								src={aboutTwo.src}
								alt="Rooted in Science and Experience illustration"
								width={360}
								height={360}
								sizes="(max-width: 768px) 250px, 360px"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>

						<div className="text">
							<h3>Rooted in Science and Experience</h3>
							<p>
								I hold a PhD in Clinical Psychology and have trained at
								institutions including Rutgers University Behavioral Health
								Care, Harvard University/Massachusetts General Hospital,
								Columbia University, Bellevue Hospital Center, and Montclair
								State University. I also have a background in psychological
								research, which continues to inform my work. In addition, I am a
								certified Reiki Master Teacher, and I draw from both scientific
								and energetic perspectives to support each client
								{"'"}s healing process when it{"'"}s welcomed and appropriate.
							</p>
						</div>
					</div>
				</div>

				<div className="section-block">
					<div className="content">
						<div className="img-container tall">
							<Image
								src={aboutThree.src}
								alt="Ketamine-Assisted Psychotherapy (KAP) illustration"
								width={360}
								height={480}
								sizes="(max-width: 768px) 250px, 360px"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>

						<div className="text">
							<h3>Ketamine-Assisted Psychotherapy (KAP)</h3>
							<p>
								As part of my practice, I also offer{" "}
								<Link href="/kap" className="link">
									Ketamine-Assisted Psychotherapy (KAP)
								</Link>{" "}
								for clients who are struggling with treatment-resistant anxiety,
								depression, or OCD. When used intentionally and in the right
								context, ketamine can help loosen entrenched thought patterns
								and create openings for deep emotional healing. My approach to
								KAP emphasizes psychological safety, therapeutic depth, and
								long-term transformation, not just temporary relief.
							</p>
						</div>
					</div>
				</div>

				<div className="section-block alt">
					<div className="content">
						<div className="img-container">
							<Image
								src={aboutFour.src}
								alt="therapy style illustration"
								width={360}
								height={360}
								sizes="(max-width: 768px) 250px, 360px"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div className="text">
							<h3>A Style That Meets You Where You Are</h3>
							<p>
								My style blends practical tools with intuitive insight. Some
								sessions are focused and structured; others leave space for the
								unknown. I see therapy as a sacred container where real healing
								can unfold, not through quick fixes, but through presence,
								curiosity, and trust in the process.
							</p>
						</div>
					</div>
				</div>

				<div className="section-block checklist">
					<div className="content">
						<div className="img-container">
							<Image
								src={aboutFive.src}
								alt="therapy fit illustration"
								width={360}
								height={360}
								sizes="(max-width: 768px) 250px, 360px"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div className="text">
							<h3>Are We a Good Fit?</h3>
							<h4>You might be a good fit to work with me if:</h4>
							<ul>
								<li>
									You{"'"}re feeling lost, stuck, anxious, or disconnected from
									your deeper self
								</li>
								<li>
									You{"'"}re open to therapy that honors both the human and the
									spiritual dimensions of life
								</li>
								<li>
									You{"'"}ve had glimpses of insight or awareness that you want
									to explore more deeply
								</li>
								<li>
									You want a therapist who can hold complexity, challenge
									gently, and walk with you
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="section-block alt cta">
					<div className="content">
						<div className="img-container">
							<Image
								src={aboutSix.src}
								alt="call to action illustration"
								width={360}
								height={360}
								sizes="(max-width: 768px) 250px, 360px"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div className="text">
							<h2 className="linebreak">
								Ready to Start?{"\n\n"} If you feel drawn to this kind of work,
								I invite you to{" "}
								<Link
									target="_blank"
									rel="noopener noreferrer"
									href="https://tanya-singh.clientsecure.me"
									className="link"
								>
									book a consultation
								</Link>
								. Let{"'"}s explore whether we{"'"}re a good fit, and how
								therapy can support your growth, healing, and clarity, wherever
								you are in your journey.
							</h2>
							<h2>
								This work can be messy. It can also be beautiful. And you don
								{"'"}t have to do it alone.
							</h2>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default About;
