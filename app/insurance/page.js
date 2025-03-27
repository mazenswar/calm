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
				<h3 className="subtext">
					we are a out-of-network provider for all insurance companies, which
					means we do not accept insurance directly. However, many insurance
					plans offer excellent out-of-network reimbursement for therapy. After
					each session, we will provide a superbill (a detailed receipt) that
					you can submit to your insurance company for potential reimbursement.
				</h3>

				<h3 className="subtext">
					I encourage you to check with your provider to understand your
					specific coverage. You may want to ask:
				</h3>
				<ul>
					<li>
						What percentage of the session fee is reimbursed for out-of-network
						therapy?
					</li>
					<li>Is there a deductible I need to meet first?</li>
					<li>How do I submit a superbill for reimbursement?</li>
				</ul>

				<h3 className="subtext">
					While in-network therapy may seem more convenient, there are many
					reasons why working with an out-of-network therapist can be a
					worthwhile investment:
				</h3>

				<h3 className="subtext">Why Choose an Out-of-Network Therapist?</h3>
				<h4 className="subtext">
					Therapy is most effective when you work with someone who truly
					understands your needs. In-network options can be limited, and you may
					not find a therapist who specializes in your concerns. Choosing an
					out-of-network provider allows you to prioritize fit, expertise, and
					the quality of care.
				</h4>

				{/* //////////////////////// */}
				<h3 className="subtext">
					We are a out-of-network provider for all insurance companies, which
					means we do not accept insurance directly. However, many insurance
					plans offer excellent out-of-network reimbursement for therapy. After
					each session, We will provide a superbill (a detailed receipt) that
					you can submit to your insurance company for potential reimbursement.
				</h3>
				<ul className="subtext">
					<li className="linebreak">
						<strong>Provide Comprehensive, Unrestricted Care:</strong>
						{"\n"} Insurance often limits the type, length, and frequency of
						sessions, which may not align with what{"'"}s best for your
						treatment.
					</li>
					<li className="linebreak">
						<strong>Maintain Confidentiality:</strong> {"\n"}Insurance companies
						require detailed records, which can compromise your privacy. By not
						accepting insurance, we ensure your information remains secure and
						confidential.
					</li>
					<li className="linebreak">
						<strong>Focus on Specialized Care:</strong>
						{"\n"} As experts in anxiety, OCD, and related disorders, we
						prioritize evidence-based, client-centered approaches without
						restrictions imposed by insurance companies.
					</li>
				</ul>
				<p className="subtext">
					You may still be eligible for partial or full reimbursement for our
					services through your insurance plan. We{"'"}re happy to provide you
					with a superbill to submit to your insurance company.
				</p>

				<h2 className="center-title">
					How to use Out-Of-Network insurance benefits
				</h2>
				<h3 className="subtext">
					Some insurance plans offer out-of-network benefits, allowing you to
					pay for therapy services upfront and then get reimbursed for a
					percentage of the fee. Here{"'"}s how to use these benefits:
				</h3>
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
				<h4 className="center-title subtext">
					For additional details or assistance with this process, feel free to
					contact us.
				</h4>
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
