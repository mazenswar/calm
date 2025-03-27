import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Insurance Informaton",
	description:
		"Information about why we do not directly take insurance and how to get reimbursed by your insurance provider for our services",
	keywords: "insurance, out-of-network provider, reimbursement",
	alternates: {
		canonical: "https://calmtherapy.center/insurance",
	},
	openGraph: {
		title: "Insurance Information",
		description:
			"Information about why we do not directly take insurance and how to get reimbursed by your insurance provider for our services",
		url: "https://calmtherapy.center/insurance",
		siteName: "CALM Therapy",
		locale: "en_US",
		type: "website",
	},
};

function Insurance() {
	return (
		<main id="insurance-page">
			<section id="insurance-section">
				<h1 className="center-title">Insurance</h1>
				<p>
					we are a out-of-network provider for all insurance companies, which
					means we do not accept insurance directly. However, many insurance
					plans offer excellent out-of-network reimbursement for therapy. After
					each session, we will provide a superbill (a detailed receipt) that
					you can submit to your insurance company for potential reimbursement.
				</p>

				<h2 className="purple">
					I encourage you to check with your provider to understand your
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

				<h2 className="purple">Why Choose an Out-of-Network Therapist?</h2>
				<p>
					Therapy is most effective when you work with someone who truly
					understands your needs. In-network options can be limited, and you may
					not find a therapist who specializes in your concerns. Choosing an
					out-of-network provider allows you to prioritize fit, expertise, and
					the quality of care.
				</p>
				<h3 className="purple">More Specialized Care</h3>
				<p>
					I specialize in treating anxiety, OCD, and perfectionism, and I offer
					ketamine-assisted therapy for treatment-resistant conditions. These
					services may not always be available within insurance networks.
				</p>
				<h3 className="purple">A Personalized Approach</h3>
				<p>
					Insurance companies often impose restrictions on session length,
					frequency, and treatment modalities. As an out-of-network provider, I
					have the flexibility to tailor therapy to what works best for you,
					rather than following insurance-mandated guidelines.
				</p>
				<h3 className="purple">Higher Reimbursement Than Expected</h3>
				<p>
					Than Expected: Many people assume out-of-network therapy is
					unaffordable, but some plans reimburse a significant portion of
					session fees after a deductible is met. If you have a high deductible
					plan, you may be paying out-of-pocket for therapy either way—so
					choosing a therapist who best fits your needs may be the better
					option.
				</p>

				<h2 className="purple">How to Use Your Out-of-Network Benefits</h2>

				<p className="linebreak">
					If your insurance plan includes out-of-network benefits, you may be
					able to receive reimbursement for a portion of your session fees.
					After each session, I provide a superbill, which you can submit to
					your insurance company. Some clients also use Reimbursify or Mentaya,
					which simplify the claims process.{"\n\n"}Before starting therapy, I
					recommend confirming your benefits to ensure that your budget and
					coverage align with my rates.
				</p>

				<div className="steps">
					<div className="step-container">
						<h2>Step 1: Verify Your Coverage</h2>
						<p>
							Contact your insurance provider and provide them with my business
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
				<h3 className="purple help">
					If you have any questions about out-of-network reimbursement, feel
					free to <Link href={"/contact"}>reach out</Link>. We are happy to help
					you navigate the process!
				</h3>
			</section>
		</main>
	);
}

export default Insurance;

// INSURANCE
// We are out-of-network providers for insurance, but you may still be able to get reimbursed for our service either partially or fully through your insurance.

// ### How to Use Out-of-Network Insurance Benefits
// Some insurance plans offer out-of-network benefits, allowing you to pay for therapy services upfront and then get reimbursed for a percentage of the fee. Here's how to use these benefits:

// **Step 1: Verify Your Coverage**
// Contact your insurance provider and provide them with my business information to confirm if they offer out-of-network reimbursement benefits.

// **Step 2: Obtain a Superbill**
// A superbill is the document you submit to your insurance for reimbursement. We will provide you with a superbill after each session, which you can then send to your insurance company.

// **Step 3: Submit for Reimbursement**
// After receiving the superbill from us, submit it to your insurance company along with any required forms to get reimbursed for your therapy sessions.

// For additional details or assistance with this process, feel free to contact us.
