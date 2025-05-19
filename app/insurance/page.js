import Link from "next/link";
import React from "react";
import Fees from "./Fees";
import InsuranceSections from "./InsuranceSections";

export const metadata = {
	title:
		"Fees & Insurance | CALM Therapy (Center for Anxiety and Life Management)",
	description:
		"Learn about session fees and out-of-network insurance reimbursement for virtual therapy with CALM Therapy. We offer transparent pricing and support you in navigating your benefits.",
	alternates: {
		canonical: "https://calmtherapy.center/insurance",
	},
	openGraph: {
		title:
			"Fees & Insurance | CALM Therapy (Center for Anxiety and Life Management)",
		description:
			"Learn about session fees and out-of-network insurance reimbursement for virtual therapy with CALM Therapy. We offer transparent pricing and support you in navigating your benefits.",
		url: "https://calmtherapy.center/insurance",
		siteName: "CALM Therapy",
		type: "website",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.png",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Virtual Therapy for Anxiety and Self-Discovery",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Fees & Insurance | CALM Therapy",
		description:
			"Explore our virtual therapy session rates and how to get reimbursed through your insurance. We’ll help you understand your out-of-network benefits.",
		images: ["https://calmtherapy.center/social/ss.png"],
	},
};

function Insurance() {
	return (
		<main id="insurance-page">
			<Fees />
			<InsuranceSections />
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
