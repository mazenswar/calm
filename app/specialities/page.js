import React from "react";
import Spec from "./Spec";
import "../scss/components/_specialities.scss";
export const metadata = {
	title: "Specialities | CALM Therapy",
	description:
		"Explore the therapy specialities offered at CALM Therapy, including anxiety, depression, OCD, perfectionism, spiritual inquiry, and more.",
	openGraph: {
		title: "Specialities | CALM Therapy",
		description:
			"Explore therapy services tailored for anxiety, mood challenges, life transitions, and spiritual growth. Virtual therapy in NJ, NY, and PA.",
		url: "https://calmtherapy.center/specialities",
		siteName: "CALM Therapy",
		type: "website",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy branding and specialities overview",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Specialities | CALM Therapy",
		description:
			"Explore therapy services tailored for anxiety, mood challenges, life transitions, and spiritual growth. Virtual therapy in NJ, NY, and PA.",
		images: ["https://calmtherapy.center/social/ss.webp"],
	},
	alternates: {
		canonical: "https://calmtherapy.center/specialities",
	},
	robots: {
		index: true,
		follow: true,
	},
};

const jsonLD = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "Therapy Services",
	itemListElement: [
		{
			"@type": "Service",
			name: "Online Therapy for Generalised Anxiety Disorder",
			url: "https://calmtherapy.center/specialities#generalised-anxiety-disorder",
		},
		{
			"@type": "Service",
			name: "Online Therapy for Panic Disorder",
			url: "https://calmtherapy.center/specialities#panic-disorder",
		},
		{
			"@type": "Service",
			name: "Online Therapy for Social Anxiety Disorder",
			url: "https://calmtherapy.center/specialities#social-anxiety-disorder",
		},
		{
			"@type": "Service",
			name: "Online Therapy for Obsessive-Compulsive Disorder (OCD)",
			url: "https://calmtherapy.center/specialities#ocd",
		},
		{
			"@type": "Service",
			name: "Online Therapy for Body Dysmorphic Disorder (BDD)",
			url: "https://calmtherapy.center/specialities#bdd",
		},
		{
			"@type": "Service",
			name: "Online Therapy for Depression",
			url: "https://calmtherapy.center/specialities#depression",
		},
		{
			"@type": "Service",
			name: "Therapy for Perfectionism",
			url: "https://calmtherapy.center/specialities#perfectionism",
		},
		{
			"@type": "Service",
			name: "Therapy for Self-Esteem and Self-Worth",
			url: "https://calmtherapy.center/specialities#self-worth",
		},
		{
			"@type": "Service",
			name: "Therapy for Life Transitions",
			url: "https://calmtherapy.center/specialities#life-transitions",
		},
		{
			"@type": "Service",
			name: "Stress Management and Work-Life Balance Therapy",
			url: "https://calmtherapy.center/specialities#stress-management",
		},
		{
			"@type": "Service",
			name: "Ketamine-Assisted Psychotherapy (KAP)",
			url: "https://calmtherapy.center/specialities#ketamine-assisted-psychotherapy",
		},
		{
			"@type": "Service",
			name: "Spiritual Exploration and Existential Inquiry",
			url: "https://calmtherapy.center/specialities#spiritual-exploration",
		},
	],
};

function SpecPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
			/>
			<Spec />
		</>
	);
}

export default SpecPage;
