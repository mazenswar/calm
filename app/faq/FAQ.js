"use client";
import React, { useEffect, useState } from "react";

import { questions } from "../data/faq";

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import faqImg from "./assets/images/faq.webp";

const defaultState = {};
questions.forEach((ele) => {
	defaultState[ele.q] = false;
});

function FAQ() {
	const [expanded, setExpanded] = useState(defaultState);
	useEffect(() => {
		if (window) {
			const pathArr = window.location.href.split("/");
			const pageName = pathArr[pathArr.length - 1];
			if (pageName.includes("#")) {
				let currentScrollY = window.scrollY;
				let currentScrollX = window.scrollX;
				window.scrollTo(currentScrollX, currentScrollY - 90);
			}
		}
	}, []);
	///////////////////////////
	function expandButton(key) {
		if (expanded[key]) {
			return (
				<button onClick={() => setExpanded({ ...expanded, [key]: false })}>
					Read Less
				</button>
			);
		} else {
			return (
				<button onClick={() => setExpanded({ ...expanded, [key]: true })}>
					Read More
				</button>
			);
		}
	}

	function handleClick(key) {
		setExpanded({ ...expanded, [key]: !expanded[key] });
	}

	return (
		<main id="faq">
			{/* <Banner img={connect} /> */}
			<section id="faq-section">
				<div className="content">
					<div className="img-container">
						<Image
							src={faqImg.src}
							alt="faq illustration"
							width={360}
							height={360}
							priority
						/>
					</div>
					<h1 className="center-title">Common Questions</h1>
					<div className="text">
						{questions.map((ele) => {
							return (
								<div
									key={`faq-${ele.id}`}
									id={ele.id}
									className={
										expanded[ele.q] ? "faq-container active" : "faq-container"
									}
								>
									<h3>{ele.q}</h3>
									<p
										className={
											expanded[ele.q]
												? "content active linebreak"
												: "content linebreak"
										}
									>
										{ele.a}
									</p>
									<div className="icon" onClick={(e) => handleClick(ele.q)}>
										<FontAwesomeIcon
											icon={expanded[ele.q] ? faArrowUp : faArrowDown}
											size="1x"
											color="var(--three)"
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}

export default FAQ;

// Frequently Asked Questions

// General Therapy Questions

// What kind of therapy do you offer?
// I take an integrative approach rooted in evidence-based practices like cognitive-behavioral therapy (CBT), mindfulness, and insight-oriented work. Depending on your needs, sessions may focus on building skills, exploring deeper patterns, or developing more compassionate awareness. This isn’t just about coping—it’s about meaningful, sustainable change.

// ⸻

// Do you offer virtual sessions?
// Yes. All therapy sessions are currently offered online via secure video conferencing. Many clients find virtual therapy just as effective and more accessible, especially when it fits seamlessly into their day.

// ⸻

// Do I need to follow a particular spiritual path to work with you?
// Not at all. You don’t need to identify as spiritual or religious. I welcome clients from all backgrounds, including those who are questioning or exploring meaning in their own way. I hold space for whatever feels authentic and true for you.

// ⸻

// Why don’t you accept insurance?
// To offer care that’s flexible, personalized, and free from diagnostic labels or session limits, I work outside of insurance networks. This allows us to focus on what matters most: your healing. You can still use out-of-network benefits through your insurance provider. For more information, visit the Insurance page.

// ⸻

// How much do sessions cost?
//     •    Initial intake session (75 minutes): $420
//     •    Ongoing sessions (45 minutes): $250
// You can find more details about fees and out-of-network reimbursement on the Fees page.

// ⸻

// Why is therapy so expensive?
// It’s a real and important question.

// Therapy is an investment—not just financially, but emotionally and energetically—in your mental health and in the life you want to build. What you’re seeking is not surface-level change. It’s clarity, healing, growth, and transformation. And while that kind of work can be done alone, I know from experience that it’s far more possible—and sustainable—when you have someone walking with you.

// Therapy may seem like “just talking,” but the process is grounded in years of clinical training, supervision, and ongoing study. As therapists, we hold a space that requires emotional presence, discernment, and care—before, during, and after each session. The time you spend with me is supported by hours you don’t see: continued education, case formulation, ethical practice, and a full professional infrastructure that allows me to offer high-quality care.

// My work is highly specialized. I draw from a wide range of modalities—including cognitive, somatic, and spiritual frameworks—to meet people who are often navigating complex, layered experiences. Working outside of insurance gives us the flexibility to do that well, without being limited by diagnosis codes or rigid treatment structures.

// Therapy is an investment. And when it’s the right fit, it can be life-changing. If finances are a concern, I offer a limited number of reduced-fee slots, and I’m happy to point you toward other options if we’re not the right fit. Either way, you don’t have to walk this path alone.

// ⸻

// How do I schedule a session?
// You can book a free 15-minute consultation through the Bookings tab. I’ll follow up within 24 hours during business days.

// ⸻

// Do you work with couples, families, or teens?
// At this time, I work with adults and older adolescents (age 16+). I do not currently provide couples or family therapy.

// ⸻

// How long will I need to be in therapy?
// Therapy isn’t one-size-fits-all. Some clients come for short-term support around a specific issue, while others stay longer to do deeper work. We’ll revisit this together over time, based on your goals and how things are unfolding.

// ⸻

// What if I need to cancel or reschedule a session?
// Please provide at least 24 hours’ notice. Sessions canceled with less than 24 hours’ notice may be charged in full.

// ⸻

// Exploring Fit

// How will I know if you’re the right therapist for me?
// That’s what the initial consultation is for. It’s a chance for us to connect, explore what you’re looking for, and see if it feels like a good fit. If not, I’ll do my best to offer a referral.

// ⸻

// Ketamine-Assisted Psychotherapy (KAP)

// Is Ketamine-Assisted Psychotherapy (KAP) right for everyone?
// No, KAP is not appropriate for everyone. Like any therapeutic modality, it’s only effective when used in the right context and with careful consideration. KAP may be a good fit if you’re struggling with treatment-resistant symptoms and are open to exploring your inner experience in an altered state—but this is something we assess together during the intake and preparation process. It’s not a one-size-fits-all solution.

// ⸻

// Will ketamine fix me?
// No one tool or treatment can “fix” a person, because you’re not broken to begin with. Healing isn’t linear, and it doesn’t come from a single experience or insight. Ketamine, when used with intention and integrated in therapy, can help you loosen stuck patterns and access new perspectives—but it’s not a cure-all. What matters most is what you do with what it brings up.

// ⸻

// Why do you offer KAP if you already use other therapies?
// Because people are complex. No single approach works for everyone all the time. KAP is one tool among many that I draw from to meet the needs of the individual in front of me. While I use therapies like CBT, IFS, and mindfulness, sometimes people benefit from accessing insight, emotion, or memory in a different state of consciousness. That’s where KAP can be uniquely helpful. My goal isn’t to follow one system, but to respond to what’s needed—and sometimes that requires integration across modalities.

// ⸻
