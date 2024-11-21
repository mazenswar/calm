import React from "react";

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function KapBox({ children, id, state, handleClick }) {
	return (
		<div
			// onClick={() => handleClick(id)}
			className={state ? "kap-box active" : "kap-box"}
			id={id}
		>
			{children}
			<div className="icon" onClick={() => handleClick(id)}>
				<FontAwesomeIcon
					icon={state ? faArrowUp : faArrowDown}
					size="1x"
					color="var(--three)"
				/>
			</div>
		</div>
	);
}

export default KapBox;

export function One() {
	return (
		<>
			<h2>What is Ketamine? </h2>

			<div className="content">
				<p>
					Ketamine is a legal, safe and effective medicine used to treat a
					variety of mental health conditions, including depression, anxiety and
					PTSD. Ketamine has rapidly-acting antidepressant and mood-enhancing
					effects, which can begin to take effect within 1-2 hrs. after
					treatment and last for up to 2 weeks. It works by blocking the brain
					{"'"}s NMDA receptors as well as by stimulating AMPA receptors, which
					are thought to help form new synaptic connections and boost neural
					circuits that regulate stress and mood. Ketamine has also been shown
					to enhance overall neuroplasticity for lasting symptom improvement.
				</p>
				<p>
					Ketamine can be administered in a variety of ways, including IV
					infusion, intramuscular injection, via nasal spray and using
					sublingual lozenges. In my work with Journey Clinical we only use the
					sublingual lozenge form.
				</p>
			</div>
		</>
	);
}

export function Two() {
	return (
		<>
			<h2>How Does Ketamine Feel?</h2>
			<div className="content">
				<p>
					The effects of ketamine, which most patients find pleasant, last for
					approximately 45 minutes. These effects can make you feel “far from”
					your body, and facilitate shifts in perception that can often feel
					expansive in nature. Your motor and verbal abilities will be reduced,
					so you{"'"}ll be lying down in a comfortable position during the
					experience. Once these effects subsided, we
					{"'"}ll spend the remainder of our appointment giving you space to
					process and discuss your experience. While it may feel hard to
					articulate what happened during the experience, patients feel like the
					insights gained are none-the-less clear. Studies have shown that the
					benefits to mood and neurological growth can last up to two weeks
					after the Ketamine experience.
				</p>
			</div>
		</>
	);
}

export function Three() {
	return (
		<>
			<h2>How Does Ketamine-Assisted Psychotherapy Work?</h2>
			<div className="content">
				<ol>
					<li>
						Initial consultation with Journey Clinical:
						<ul>
							<li>
								You schedule an initial evaluation with a clinician from the
								Journey Clinical medical team via zoom. They will go over your
								medical and psychiatric history with you, provide education on
								the treatment and determine if you are eligible for KAP.
							</li>
							<li>
								If Journey Clinical{"'"}s medical team determines that you are
								eligible for KAP, they will develop a personalized Ketamine
								prescription and outcome monitoring plan for you.
							</li>
							<li>
								Journey Clinical{"'"}s medical staff will write a ketamine
								prescription for you, and a small amount of oral ketamine will
								be sent to your home, enough for the first 2 KAP sessions. You
								will be taught to take your vitals and self-administer the
								ketamine lozenges by Journey Clinical
								{"'"}s medical team in advance of our KAP sessions.
							</li>
						</ul>
					</li>
					<li>
						<b>Preparation sessions:</b>
						<ul>
							<li>
								Once you receive your ketamine lozenges, we will schedule time
								together for our KAP preparation, dosing and integration
								sessions. Preparation session(s) will be scheduled just like
								regular therapy sessions prior to the KAP dosing session. The
								goal of a preparation session(s) is to align on the process and
								set intentions for our KAP sessions together.
							</li>
						</ul>
					</li>
					<li>
						<b>KAP Dosing Session:</b>
						<ul>
							<li>
								A typical ketamine dosing session lasts between 1.5-2.5 hours
								and can take place either in-person at my office, or remotely
								via telehealth.
							</li>
							<li>
								During a dosing session, you will self-administer your ketamine
								lozenge in your home. You will be in a comfortable, reclining
								position wearing an eye mask and listening to calming music.
								Although a KAP dosing session may be largely an internal
								experience, I will be present with you the entire time to hold
								space and provide support as needed.
							</li>
						</ul>
					</li>
					<li>
						<b>Integration Sessions:</b>
						<ul>
							<li>
								After our KAP dosing session, we will meet for multiple
								integration therapy sessions to review the memories, thoughts &
								insights that arose during your dosing session, and to prepare
								for the next dosing session.
							</li>
						</ul>
					</li>
					<li>
						<b>Follow-up consultations with Journey Clinical:</b>
						<ul>
							{" "}
							<li>
								After our first KAP session, Journey Clinical{"'"}s medical team
								schedules regular follow ups with you to monitor outcomes and
								prescribe ketamine lozenge refills, as appropriate. The
								frequency of follow ups depends on your unique treatment plan,
								at a minimum of once per quarter.
							</li>
						</ul>
					</li>
				</ol>
			</div>
		</>
	);
}

export function Five() {
	return (
		<>
			<h2>Follow-up Consultations with Journey Clinical</h2>
			<div className="content">
				<p>
					After our first KAP session, Journey Clinical{"'"}s medical team
					schedules regular follow ups with you to monitor outcomes and
					prescribe ketamine lozenge refills, as appropriate. The frequency of
					follow ups depends on your unique treatment plan, at a minimum of once
					per quarter.
				</p>
			</div>
		</>
	);
}

// What is the Cost of Treatment?

// Ketamine-Assisted Psychotherapy (KAP) is a transformative modality that combines ketamine dosing sessions with therapy to promote healing and growth. Here’s a breakdown of the costs:

// My Fees for KAP Sessions

// •	Preparation and Integration Sessions: These sessions last about 45 minutes and are billed at my typical rate of $220 per session.
// •	Dosing Sessions: These sessions can take anywhere from 1.5 to 2.5 hours and are billed based on their duration:
// •	1.5-hour session: $435
// •	2-hour session: $580

// If you plan to seek reimbursement for these sessions through your out-of-network benefits, please note that insurance will typically only reimburse the first 60 minutes of the dosing session. The remaining time will need to be paid out-of-pocket.

// Journey Clinical Medical Costs

// While I am an out-of-network provider, Journey Clinical accepts Aetna insurance in New York for the medical intake and follow-up consultations. Their costs are as follows:
// 	•	First-Time Patients:
// 	•	Initial medical consultation with Journey Clinical: $250
// 	•	Cost of medication: $88 (enough for 2 sessions)
// 	•	Ongoing Treatment:
// 	•	Follow-up medical consultation with Journey Clinical: $150 (at least 1X per quarter)
// 	•	Cost of medication: $148 (enough for up to 6 sessions)

// Accessibility Options

// I understand that cost can be a barrier for some, so I offer a limited number of sliding scale slots to ensure this treatment remains as accessible as possible.

// This work is an investment in your mental health, and many clients find it to be a life-changing part of their healing journey. If you have any questions or concerns about costs or insurance, please don’t hesitate to reach out!

export function Six() {
	return (
		<>
			<h2>What is the Cost of Treatment?</h2>
			<div className="content">
				<p>
					Ketamine-Assisted Psychotherapy (KAP) is a transformative modality
					that combines ketamine dosing sessions with therapy to promote healing
					and growth. Here{"'"}s a breakdown of the costs:
				</p>

				<div className="cost-container">
					<div className="my-fee">
						<h4>My Fees for KAP Sessions</h4>
						<ul>
							<li>
								<strong>Preparation and Integration Sessions:</strong> These
								sessions last about 45 minutes and are billed at my typical rate
								of $220 per session.
							</li>
							<li>
								<strong>Dosing Sessions:</strong> These sessions can take
								anywhere from 1.5 to 2.5 hours and are billed based on their
								duration:
							</li>
							<li>
								<strong>1.5-hour session:</strong> $435
							</li>
							<li>
								<strong>2-hour session:</strong> $580
							</li>
						</ul>
					</div>
					<div className="journey-fee">
						<h4>Journey Clinical Medical Costs</h4>
						<p>
							While I am an out-of-network provider, Journey Clinical accepts
							Aetna insurance in New York for the medical intake and follow-up
							consultations. Their costs are as follows:
						</p>
						<div className="side-container">
							<h5>First-time patients</h5>
							<ul>
								<li>
									Initial medical consultation with Journey Clinical: $250
								</li>
								<li>Cost of medication: $88 (enough for 2 sessions)</li>
							</ul>
						</div>
						<div className="side-container">
							<h5>Ongoing treatment</h5>
							<ul>
								<li>
									Follow-up medical consultation with Journey Clinical $150 (at
									least 1X per quarter)
								</li>
								<li>Cost of medication: $148 (enough for up to 6 sessions)</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export function Seven() {
	return (
		<>
			<h2>How Do I Sign Up?</h2>
			<div className="content">
				<p>
					If you would like to explore the possibility of working with me on
					KAP, please e-mail me at XXX@gmail.com to discuss eligibility and next
					steps.
				</p>
			</div>
		</>
	);
}

export function Eight() {
	return (
		<>
			<h2>What is Journey Clinical?</h2>
			<div className="content">
				<p>
					<a href="https://www.journeyclinical.com/" target="_blank">
						Journey Clinical
					</a>{" "}
					is a platform for licensed psychotherapists to incorporate
					science-based psychedelic therapies in their practice safely and
					effectively, starting with Ketamine-Assisted Psychotherapy (KAP).
					Journey Clinical
					{"'"}s in-house medical team takes on patient eligibility,
					prescriptions and outcome monitoring, while I take on the therapy.
					Their collaborative care model is designed to deliver personalized
					treatment plans to meet your individual needs and improve long-term
					outcomes.
				</p>
			</div>
		</>
	);
}

export function Nine() {
	return (
		<>
			<h2>Helpful Resources</h2>
			<div className="content">
				<ol>
					<li>
						<a
							target="_blank"
							href="https://maps.org/news/bulletin/paradigms-of-ketamine-treatment-spring-2019/"
						>
							Paradigms of Ketamine Treatment
						</a>{" "}
						by Raquel Bennett, Psy.D. for MAPS
					</li>
					<li>
						<a
							target="_blank"
							href="https://www.tandfonline.com/doi/full/10.1080/02791072.2019.1587556"
						>
							Ketamine Assisted Psychotherapy (KAP): Patient Demographics,
							Clinical Data and Outcomes in Three Large Practices Administering
							Ketamine with Psychotherapy
						</a>
						- research study by Jennifer Dore et al, 2018
					</li>
					<li>
						<a
							target="_blank"
							href="https://www.townsendletter.com/article/438-ketamine-for-depression-and-mood-disorders/"
						>
							Ketamine for Depression and Mood Disorders
						</a>
						by Erica Zelfand, ND for Townsend Letter
					</li>
					<li>
						<a
							target="_blank"
							href="https://goop.com/wellness/health/ketamine-facilitated-psychotherapy/"
						>
							Ketamine-Facilitated Psychotherapy for Trauma, Anxiety, and
							Depression
						</a>{" "}
						by goop
					</li>
					<li>
						<a
							target="_blank"
							href="https://www.spreaker.com/user/11347814/ketamine-assited-psychotherapy-with-jona"
						>
							Ketamine Assisted Psychotherapy with Jonathan Sabbagh of Journey
							Clinical
						</a>{" "}
						- Psychology Talk Podcast
					</li>
				</ol>
			</div>
		</>
	);
}

export function Four() {
	return (
		<>
			<h2>Do you offer KAP remotely?</h2>

			<div className="content">
				<p>
					Yes, I currently offer Ketamine-Assisted Psychotherapy (KAP)
					exclusively through remote sessions. While engaging in KAP remotely,
					you will need to have a trusted chaperone present in the same location
					for the entirety of the session. This person is there to provide
					safety and support during the experience, ensuring that you feel
					secure throughout the process.
				</p>
				<p>
					Remote KAP offers several unique benefits. It allows you to engage in
					this transformative work from the comfort and familiarity of your own
					space, which can help foster a sense of ease and grounding.
					Additionally, it eliminates the need for travel, making it more
					accessible and convenient. Many people find that being in their own
					environment during KAP sessions can enhance their sense of comfort and
					grounding, which may help them connect the insights gained during the
					session to their daily lives.
				</p>
				<p>
					If you have further questions about remote KAP or the role of a
					chaperone, feel free to reach out—I{"'"}d be happy to provide
					additional details.
				</p>
			</div>
		</>
	);
}
