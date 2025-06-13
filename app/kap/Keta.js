import React from "react";
import ketaBrain from "./assets/images/keta.webp";
import Image from "next/image";
import Link from "next/link";

function Keta() {
	return (
		<main id="keta">
			<div className="content">
				<section className="keta-header">
					<div className="img-container">
						<Image
							src={ketaBrain.src}
							alt="illustration of brain meditating"
							width={320}
							height={480}
							priority
							sizes="(max-width: 768px) 250px, 320px"
						/>
					</div>
					<div className="text">
						<h1>Ketamine-Assisted Psychotherapy (KAP)</h1>
						<h3>
							Integrating science, presence, and inner exploration for healing
						</h3>
						<p>
							Ketamine-Assisted Psychotherapy offers a unique opportunity to
							reach parts of the self that may feel inaccessible through talk
							therapy or traditional treatments. When used in a safe and
							intentional setting, ketamine can loosen rigid thought patterns,
							soften internal defenses, and create space for deeper
							self-understanding.
						</p>
						<p>
							In our work together, KAP is never used as a quick fix. It is a
							carefully held therapeutic process that includes preparation,
							dosing, and integration.
						</p>
					</div>
				</section>
				<section className="keta-box">
					<h2>What Is Ketamine and Why Is It Used?</h2>
					<p>
						Ketamine is a dissociative anesthetic that has been used safely in
						medical settings for decades. In recent years, research has shown
						that, when used in sub-anesthetic doses and paired with
						psychotherapy, ketamine may provide relief for symptoms of
						depression, anxiety, OCD, PTSD, and other mental health concerns
						that have not responded to traditional treatments.
					</p>
					<p>
						Ketamine is thought to work by increasing neuroplasticity,
						disrupting the default mode network in the brain, and facilitating
						access to previously unconscious thoughts, emotions, and patterns.
						These shifts can support a more open, flexible state of mind, where
						healing insights and emotional breakthroughs are more likely to
						occur.
					</p>
				</section>
				<section className="keta-box">
					<h2>Is KAP Right for You?</h2>
					<h3>KAP may be appropriate if you:</h3>
					<ul>
						<li>
							Are struggling with treatment-resistant depression, anxiety, or
							OCD.
						</li>
						<li>Feel stuck in longstanding emotional or cognitive patterns</li>
						<li>
							Are open to altered states of consciousness as a therapeutic tool
						</li>
						<li>
							Want to deepen your healing process in a safe, supported, and
							structured way
						</li>
					</ul>
					<p>
						While ketamine can open the door to change, the true transformation
						comes from how you integrate what arises. KAP is not for everyone,
						and we will assess together whether this is the right path for you.
					</p>
				</section>
				<section className="keta-box">
					<h2>How It Works: The KAP Process</h2>
					<p>
						I partner with{" "}
						<Link
							legacyBehavior
							href="https://www.journeyclinical.com/patients"
						>
							<a className="link" target="_blank" rel="noopener noreferrer">
								Journey Clinical
							</a>
						</Link>
						, a platform of licensed prescribers who evaluate your eligibility
						for KAP and manage the medical s of treatment. If approved, they
						prescribe sublingual ketamine lozenges, which are delivered to your
						home pharmacy.
					</p>
					<ol>
						<li>Medical Consultation and Screening</li>
						<ul>
							<li>
								Initial Consultation: Conducted by Journey Clinical to assess
								your medical and psychiatric history.
							</li>
							<li>
								Prescription: If deemed appropriate, sublingual ketamine
								lozenges are prescribed and shipped to your home pharmacy.
							</li>
						</ul>
						<li>Preparation Sessions</li>
						<p>
							Before any ketamine dosing, we will meet for 5-6 preparation
							sessions to:
						</p>
						<ul>
							<li>Build trust and establish a strong therapeutic alliance</li>
							<li>Explore your intentions and goals</li>
							<li>Clarify any fears, questions, or expectations</li>
							<li>
								Develop grounding and coping tools so you feel safe and
								supported during dosing
							</li>
							<li>
								Duration: Each prep session is 45-mins (like a typical therapy
								session).
							</li>
						</ul>
						<li>Dosing Sessions</li>
						<ul>
							<li>
								Format: Currently, I offer KAP exclusively via telehealth.
							</li>
							<li>
								Duration: Each dosing session lasts approximately 1.5 to 2.5
								hours.
							</li>
							<li>
								Setting: You will self-administer the ketamine lozenge in my
								presence via a secure video call. You{"'"}ll be at your home in
								a comfortable, reclining position, possibly with an eye mask and
								calming music.
							</li>
							<li>
								Support: I will be present throughout the session to hold space
								and provide support as needed.
							</li>
						</ul>
						<p>
							Safety Note: For remote sessions, a trusted support person
							(chaperone) must be present in your home. They should be available
							to check in as needed but are not actively involved in the
							session.
						</p>
						<li>Integration Sessions</li>
						<p>
							The integration is one of the most important part of your
							journeys. These sessions are about making sense of your
							experience. After each dosing session, we meet for one or more
							integration sessions to:
						</p>
						<ul>
							<li>
								Explore themes, images, emotions, or bodily sensations that
								emerged
							</li>
							<li>Process insights and apply them to your daily life</li>
							<li>
								Ground the experience through mindfulness or somatic practices
							</li>
						</ul>
						<li>Ongoing Medical Follow-Ups</li>
						<p>
							Journey Clinical schedules regular follow-ups (at least once per
							quarter) to monitor outcomes and prescribe ketamine lozenge
							refills as appropriate.
						</p>
					</ol>
				</section>
				<section className="keta-box">
					<h2>Cost of Treatment</h2>

					<h3>Journey Clinical Costs:</h3>

					<ul>
						<li>Initial Medical Consultation: $250.</li>
						<li>Ketamine Medication: $97 (enough for 2 sessions)</li>
						<li>
							Follow-Up Medical Consultations: $150 (at least once per quarter)
						</li>
						<li>
							Ketamine Medication Refills: $263 (enough for up to 6 sessions)
						</li>
					</ul>
					<strong>Note: </strong>
					<p>Medical consultation costs may be covered by insurance.</p>
				</section>
				<section className="keta-box">
					<h2>Psychotherapy Costs:</h2>
					<ul>
						<li>
							Preparation and Integration Sessions: Billed at my standard hourly
							rate.
						</li>
						<li>
							Dosing Sessions: Billed at my standard hourly rate; each session
							lasts approximately 1.5 to 2.5 hours.
						</li>
					</ul>

					<p>
						Please check our{" "}
						<Link className="link" href="/insurance">
							Fees & Insurance
						</Link>{" "}
						page for more information
					</p>
				</section>
				<section className="keta-box">
					<h2>Safety and Ethical Considerations</h2>
					<ul>
						<li>
							Remote-Only Offering: I currently offer KAP exclusively via
							telehealth. While some clinicians provide in-person KAP, my
							practice is fully remote.
						</li>
						<li>
							Chaperone Requirement: For remote sessions, a trusted support
							person must be present in your home to ensure safety.
						</li>
						<li>
							Medical Oversight: All medical aspects of KAP are managed by
							Journey Clinical.
						</li>
						<li>
							Ethical Practice: I adhere to all professional guidelines to
							ensure a safe and ethical therapeutic environment.
						</li>
					</ul>
				</section>
				<section className="keta-box">
					<h2>Helpful Resources</h2>
					<div className="links-container">
						<Link
							legacyBehavior
							href="https://www.journeyclinical.com/patients"
						>
							<a className="link" target="_blank" rel="noopener noreferrer">
								Journey Clinical - For Patients
							</a>
						</Link>
						<Link legacyBehavior href="https://www.journeyclinical.com/kap-101">
							<a className="link" target="_blank" rel="noopener noreferrer">
								KAP 101 - Journey Clinical
							</a>
						</Link>
						<Link
							legacyBehavior
							href="https://journeyclinical.zendesk.com/hc/en-us/articles/20577809289364-Cost-of-KAP-Treatment"
						>
							<a className="link" target="_blank" rel="noopener noreferrer">
								Cost of KAP Treatment - Journey Clinical
							</a>
						</Link>
					</div>
				</section>
				<section className="keta-box useful-links">
					<h2>Other Helpful Readings and Podcasts</h2>
					<Link
						legacyBehavior
						href="https://maps.org/news/bulletin/paradigms-of-ketamine-treatment-spring-2019/"
					>
						<a className="link" target="_blank" rel="noopener noreferrer">
							Paradigms of Ketamine Treatment by Raquel Bennett, Psy.D. for MAPS
						</a>
					</Link>
					<Link
						legacyBehavior
						href="https://www.tandfonline.com/doi/full/10.1080/02791072.2019.1587556"
					>
						<a className="link" target="_blank" rel="noopener noreferrer">
							Ketamine Assisted Psychotherapy (KAP): Patient Demographics,
							Clinical Data and Outcomes in Three Large Practices Administering
							Ketamine with Psychotherapy- research study by Jennifer Dore et
							al, 2018
						</a>
					</Link>
					<Link
						legacyBehavior
						href="https://www.townsendletter.com/article/438-ketamine-for-depression-and-mood-disorders/"
					>
						<a className="link" target="_blank" rel="noopener noreferrer">
							Ketamine for Depression and Mood Disorders by Erica Zelfand, ND
							for Townsend Letter
						</a>
					</Link>
					<Link
						legacyBehavior
						href="https://goop.com/wellness/health/ketamine-facilitated-psychotherapy/"
					>
						<a className="link" target="_blank" rel="noopener noreferrer">
							Ketamine-Facilitated Psychotherapy for Trauma, Anxiety, and
							Depression by goop
						</a>
					</Link>
					<Link
						legacyBehavior
						href="https://www.spreaker.com/user/11347814/ketamine-assited-psychotherapy-with-jona"
					>
						<a className="link" target="_blank" rel="noopener noreferrer">
							Ketamine Assisted Psychotherapy with Jonathan Sabbagh of Journey
							Clinical - Psychology Talk Podcast
						</a>
					</Link>
				</section>
			</div>
		</main>
	);
}

export default Keta;
