import React from "react";
import ketaBrain from "./assets/images/keta.webp";
import Image from "next/image";
import Link from "next/link";

function Keta() {
	return (
		<main id="keta">
			<section className="keta-header">
				<div className="content">
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
						<i>A gentle, supported path for inner healing</i>
						<p>
							Some parts of ourselves are hard to reach through words alone. For
							people feeling stuck in depression, anxiety, OCD, or emotional
							patterns that don{"'"}t respond to talk therapy, KAP offers a
							different way in.
						</p>
						<p>
							At CALM Therapy, Ketamine-Assisted Psychotherapy is not a shortcut
							or a trend. It{"'"}s a careful, grounded process that we offer
							only after trust and stability have been built through regular
							therapy. For clients who are ready, ketamine can help loosen
							deeply embedded defenses, create moments of emotional clarity, and
							open the door to meaningful transformation.
						</p>
					</div>
				</div>
			</section>

			<section className="keta-box alt">
				<div className="content">
					<h2>What to Expect: The KAP Process</h2>

					<p>
						Before we begin any work with ketamine, we ask all clients to engage
						in weekly therapy for at least 6 weeks. These sessions allow us to
						build a strong foundation of trust and assess whether KAP is the
						right fit for your needs and goals. If we decide to move forward, we
						will begin a separate KAP-specific process that includes
						preparation, dosing, and integration.
					</p>

					<ol>
						<li>
							<h3>Medical Screening</h3>
							<p>
								We partner with{" "}
								<Link
									href="https://www.journeyclinical.com/patients"
									target="_blank"
									rel="noopener noreferrer"
									className="link"
								>
									Journey Clinical
								</Link>
								, a platform of licensed prescribers who handle all medical
								aspects of KAP. If appropriate, they prescribe sublingual
								ketamine lozenges, which are shipped to your home.
							</p>
							<ul>
								<li>
									Initial consultation with Journey Clinical to review your
									medical and psychiatric history
								</li>
								<li>
									If approved, ketamine lozenges are prescribed and delivered
								</li>
							</ul>
						</li>

						<li>
							<h3>KAP Preparation Sessions</h3>
							<p>
								Once approved medically, we meet for 5-6 sessions to prepare
								specifically for your ketamine experiences.
							</p>
							<ul>
								<li>Clarify your goals, hopes, and intentions</li>
								<li>Discuss concerns, expectations, and practical details</li>
								<li>
									Establish grounding and coping tools to support you during
									sessions
								</li>
								<li>
									Strengthen your ability to navigate altered states with safety
									and curiosity
								</li>
								<li>
									Each prep session is 45 minutes (like a regular therapy
									session)
								</li>
							</ul>
						</li>

						<li>
							<h3>Dosing Sessions</h3>
							<p>
								Dosing sessions are currently offered virtually. You will take
								your prescribed ketamine lozenge at home, while we meet together
								on a secure video call.
							</p>
							<ul>
								<li>Each session lasts about 1.5 to 2.5 hours</li>
								<li>
									You will be in a comfortable, quiet setting with optional eye
									mask and music
								</li>
								<li>
									I will be present throughout to offer support and hold
									therapeutic space
								</li>
							</ul>
							<p>
								<strong>Note:</strong> A trusted support person must be
								physically present in your home during the session for safety.
								They are not involved in the session but must be available to
								check in as needed.
							</p>
							<p>
								If distance and availability allow, we may be able to offer up
								to two in-person dosing sessions at your home at the beginning
								of your KAP journey. This option will be discussed on a
								case-by-case basis.
							</p>
						</li>

						<li>
							<h3>Integration Sessions</h3>
							<p>
								Integration is where the real transformation happens. After each
								dosing session, we meet to explore what arose and support the
								movement of insights into your daily life.
							</p>
							<ul>
								<li>Make sense of visual, emotional, or bodily experiences</li>
								<li>Reflect on themes, breakthroughs, or challenges</li>
								<li>Apply the experience to your healing process</li>
								<li>
									Use mindfulness, somatic work, or creativity to ground the
									experience
								</li>
							</ul>
						</li>

						<li>
							<h3>Ongoing Medical Follow-Ups</h3>
							<p>
								Journey Clinical handles all follow-up evaluations and
								prescription refills. They check in with you regularly (at least
								quarterly) to monitor your progress and adjust care as needed.
							</p>
						</li>
					</ol>
				</div>
			</section>

			<section className="keta-box">
				<div className="content">
					<h2>Is KAP Right for You?</h2>

					<p>
						Ketamine-Assisted Psychotherapy isn{"'"}t a fit for everyone, but it
						may be a powerful option if you feel stuck and traditional
						approaches haven{"'"}t helped. It{"'"}s most effective for people
						who are ready to explore their inner world in a deep, supported way.
					</p>

					<h3>You might consider KAP if you:</h3>
					<ul>
						<li>
							Are struggling with depression, anxiety, or OCD that hasn{"'"}t
							improved with other treatments
						</li>
						<li>
							Feel caught in long-standing emotional patterns that are hard to
							shift
						</li>
						<li>
							Are open to using altered states of consciousness as part of the
							healing process
						</li>
						<li>
							Want to go beyond talk therapy and explore root causes in a safe,
							structured setting
						</li>
					</ul>

					<p>
						We{"'"}ll take time to explore whether this path is right for you.
						Before beginning, we assess clinical appropriateness and make sure
						you
						{"'"}re set up with the support, structure, and clarity you need to
						benefit from the process.
					</p>
				</div>
			</section>

			<section className="keta-box alt">
				<div className="content">
					<div className="subsection">
						<h2>Cost of Treatment</h2>

						<p>
							Ketamine-Assisted Psychotherapy involves both medical and
							therapeutic services. We{"'"}ve outlined the costs below so you
							can plan accordingly. Please note that medical costs are handled
							through Journey Clinical, while therapy sessions are billed
							directly through our practice.
						</p>
					</div>
					<div className="subsection">
						<h3>Journey Clinical (Medical Costs)</h3>
						<ul>
							<li>
								Initial medical consultation: <strong>$250</strong>
							</li>
							<li>
								Ketamine lozenges (starter dose for 2 sessions):{" "}
								<strong>$97</strong>
							</li>
							<li>
								Follow-up medical evaluations: <strong>$150</strong> (required
								at least once per quarter)
							</li>
							<li>
								Refills (up to 6 doses): <strong>$263</strong>
							</li>
						</ul>
						<p>
							<strong>Note:</strong> Some medical costs may be reimbursed by
							insurance. Journey Clinical can provide documentation for
							submission if applicable.
						</p>
					</div>
					<div className="subsection">
						<h3>Therapy (Our Practice)</h3>
						<ul>
							<li>
								Preparation sessions (5-6 total): billed at our standard hourly
								rate
							</li>
							<li>
								Dosing sessions: billed hourly (each session is 1.5 to 2.5
								hours)
							</li>
							<li>Integration sessions: billed at our standard hourly rate</li>
						</ul>

						<p>
							Please visit our{" "}
							<Link className="link" href="/fees-and-insurance">
								Fees & Insurance
							</Link>{" "}
							page for details on session rates and out-of-network reimbursement
							options.
						</p>
					</div>
				</div>
			</section>

			<section className="keta-box">
				<div className="content">
					<h2>Safety and Ethical Considerations</h2>

					<ul>
						<li>
							<strong>Remote-first model:</strong> All KAP sessions are
							currently conducted via secure telehealth. While some providers
							offer in-person sessions, our practice is fully virtual for now.
						</li>
						<li>
							<strong>Optional in-person dosing (limited):</strong> For clients
							who strongly prefer to begin with in-person dosing, we may be able
							to offer up to two house-call sessions. This option depends on
							your location, timing, and clinical fit. If available, additional
							travel fees may apply.
						</li>
						<li>
							<strong>Chaperone support:</strong> For remote dosing, a trusted
							support person must be present in your home during the session.
							They do not need to participate, but should be nearby in case of
							any safety concerns.
						</li>
						<li>
							<strong>Medical oversight:</strong> All medical decisions,
							including screening, prescribing, and follow-up, are handled by
							licensed prescribers at Journey Clinical.
						</li>
						<li>
							<strong>Ethical foundation:</strong> I follow all professional and
							legal guidelines for the safe, ethical, and compassionate delivery
							of psychedelic-assisted therapy.
						</li>
					</ul>
				</div>
			</section>

			<section className="keta-box alt keta-links">
				<div className="content">
					<h2>Further Reading & Resources</h2>
					<ul>
						<li>
							<Link
								href="https://www.journeyclinical.com/patients"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Journey Clinical - KAP for Patients
							</Link>
						</li>
						<li>
							<Link
								href="https://www.journeyclinical.com/resources"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Journey Clinical - KAP 101 Guide
							</Link>
						</li>
						<li>
							<Link
								href="https://maps.org/research-archive/mdma/MDMA-Ketamine_Paradigms_RaquelBennett.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Paradigms of Ketamine Treatment - Raquel Bennett, Psy.D. (MAPS)
							</Link>
						</li>
						<li>
							<Link
								href="https://pubmed.ncbi.nlm.nih.gov/30360952/"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Research Study: KAP Outcomes in Three Large Practices - Dore et
								al., 2018
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}

export default Keta;
