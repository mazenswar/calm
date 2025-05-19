import Link from "next/link";
import React from "react";
import ofnImage from "./assets/images/ofn.png";
import Image from "next/image";
import insqImg from "./assets/images/insq.png";

function InsuranceSections() {
	return (
		<div className="insurance-sections">
			<section className="insurance-section">
				<h1 className="center-title">Insurance</h1>
				<p>
					We are a out-of-network provider for all insurance companies, which
					means we do not accept insurance directly. However, many insurance
					plans offer excellent out-of-network reimbursement for therapy. After
					each session, we will provide a superbill (a detailed receipt) that
					you can submit to your insurance company for potential reimbursement.
				</p>
			</section>

			<section className="insurance-section alt">
				<h2 className="purple">
					We encourage you to check with your provider to understand your
					specific coverage. You may want to ask:
				</h2>
				<ul>
					<li>
						What percentage of the session fee is reimbursed for out-of-network
						therapy?
					</li>
					<li>Is there a deductible I need to meet first?</li>
					<li>How do I submit a superbill for reimbursement?</li>
				</ul>
				<p>
					While in-network therapy may seem more convenient, there are many
					reasons why working with an out-of-network therapist can be a
					worthwhile investment:
				</p>
			</section>
			<section className="insurance-section">
				<h2 className="purpl3">Why Choose an Out-of-Network Therapist?</h2>
				<div className="ofn-banner">
					<Image
						src={ofnImage.src}
						alt="illustration"
						width={500}
						height={500}
					/>
					<p>
						Therapy is most effective when you work with someone who truly
						understands your needs. In-network options can be limited, and you
						may not find a therapist who specializes in your concerns. Choosing
						an out-of-network provider allows you to prioritize fit, expertise,
						and the quality of care.
					</p>
				</div>
				<div className="sub-container">
					<div className="sub">
						<h3 className="purple">More Specialized Care</h3>
						<p>
							While some in-network providers treat anxiety and OCD, these
							conditions often require specialized training to be addressed
							effectively. Our practice focuses on anxiety-related disorders,
							OCD, and perfectionism, utilizing evidence-based approaches that
							require advanced expertise. Additionally, we offer
							ketamine-assisted therapy for treatment-resistant conditions, a
							service not commonly available in insurance networks.
						</p>
					</div>
					<div className="sub">
						<h3 className="purple">A Personalized Approach</h3>
						<p>
							Insurance companies often impose restrictions on session length,
							frequency, and treatment modalities. As an out-of-network
							provider, we have the flexibility to tailor therapy to what works
							best for you, rather than following insurance-mandated guidelines.
						</p>
					</div>
					<div className="sub">
						<h3 className="purple">Higher Reimbursement Than Expected</h3>
						<p>
							Many people assume out-of-network therapy is unaffordable, but
							some plans reimburse a substantial portion of session fees once a
							deductible is met. If you have a high-deductible plan, you may be
							paying out-of-pocket for therapy either way, so it{"'"}s worth
							choosing a therapist who truly fits your needs and can support
							your long-term growth.
						</p>
					</div>
				</div>
			</section>

			<section className="insurance-section alt">
				<h2 className="purple">How to Use Your Out-of-Network Benefits</h2>

				<p className="linebreak">
					If your insurance plan includes out-of-network benefits, you may be
					able to receive reimbursement for a portion of your session fees.
					After each session, we will provide a superbill, which you can submit
					to your insurance company. Some clients also use{" "}
					<Link href="https://reimbursify.com/" target="_blank">
						Reimbursify
					</Link>{" "}
					or{" "}
					<Link href="https://www.mentaya.com/" target="_blank">
						Mentaya
					</Link>
					, which simplify the claims process.{"\n\n"}
					Before starting therapy, we recommend confirming your benefits to
					ensure that your budget and coverage align with our rates.
				</p>

				<div className="steps">
					<div className="step-container">
						<h2>Step 1: Verify Your Coverage</h2>
						<p>
							Contact your insurance provider and provide them with our business
							information to confirm if they offer out-of-network reimbursement
							benefits.
						</p>
					</div>
					<div className="step-container">
						<h2>Step 2: Obtain a Superbill</h2>
						<p>
							A superbill is the document you submit to your insurance for
							reimbursement. We will provide you with a superbill after each
							session, which you can then send to your insurance company.
						</p>
					</div>
					<div className="step-container">
						<h2>Step 3: Submit for Reimbursement</h2>
						<p>
							After receiving the superbill from us, submit it to your insurance
							company along with any required forms to get reimbursed for your
							therapy sessions.
						</p>
					</div>
				</div>
			</section>
			<section className="insurance-section cta">
				<Image
					src={insqImg.src}
					alt="more questions illustration"
					width={500}
					height={500}
				/>
				<h3 className="purple help center-title">
					If you have any questions about out-of-network reimbursement, feel
					free to <Link href={"/contact"}>reach out</Link>. We are happy to help
					you navigate the process!
				</h3>
			</section>
		</div>
	);
}

export default InsuranceSections;
