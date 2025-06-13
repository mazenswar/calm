import { render } from "@react-email/render";

const calendlyLinkUrl = "https://calendly.com/tsingh-calmtherapy/15min";

import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Text,
	Link,
} from "@react-email/components";

export function ConsultationEmail({ name }) {
	return (
		<Html>
			<Head />
			<Preview>Thank you for reaching out to CALM Therapy</Preview>
			<Body
				style={{
					fontFamily: "Arial, sans-serif",
					padding: "20px",
				}}
			>
				<Container
					style={{
						padding: "20px",
						borderRadius: "8px",
					}}
				>
					<Text>Hi {name},</Text>

					<Text>
						Thank you for reaching out to schedule a consultation. We know that
						starting this process can take a lot of thought, and we{"'"}re
						honored that you{"'"}re considering CALM Therapy to be part of your
						journey.
					</Text>

					<Text>
						Before moving forward, we want to let you know that we{"'"}re an
						out-of-network provider and do not accept insurance directly.
						However, many of our clients receive reimbursement through their
						insurance providers for out-of-network services.
					</Text>

					<Text>
						You can find more details about our fees and insurance&nbsp;
						<Link
							href="https://www.calmtherapy.center/insurance"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								fontSize: "inherit",
								textDecoration: "underline",
								color: "#c266a7",
							}}
						>
							here
						</Link>
						.
					</Text>

					<Text>
						Your therapist will also be happy to answer any questions during the
						consultation. If you{"'"}d like to move forward, please use the link
						below to schedule your free consultation with Dr. Tanya Singh.
					</Text>

					<Link
						href={calendlyLinkUrl}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: "block",
							fontSize: "14px",
							textDecoration: "underline",
							color: "#c266a7",
						}}
					>
						Book Your Free Consultation
					</Link>

					<Text style={{ marginTop: "32px" }}>
						Warmly,
						<br />
						The CALM Therapy Team
					</Text>

					<Container
						style={{
							marginTop: "32px",
							paddingTop: "20px",
							borderTop: "1px solid #e0e0e0",
							textAlign: "center",
							fontSize: "12px",
							color: "#555",
						}}
					>
						<Link
							href="https://www.calmtherapy.center"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://www.calmtherapy.center/images/CALM_logo_Transparent.png"
								alt="CALM Therapy Logo"
								width="150"
								style={{ marginBottom: "12px" }}
							/>
						</Link>

						<Link
							href="https://www.calmtherapy.center"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: "block",
								fontSize: "14px",
								textDecoration: "underline",
								color: "#c266a7",
							}}
						>
							www.calmtherapy.center
						</Link>

						<Link
							href="mailto:info@calmtherapy.center"
							style={{
								display: "block",
								fontSize: "14px",
								textDecoration: "underline",
								color: "#c266a7",
								marginTop: "10px",
							}}
						>
							info@calmtherapy.center
						</Link>
					</Container>
				</Container>
			</Body>
		</Html>
	);
}

export async function clientAutoResponse({ email, name }) {
	const html = await render(<ConsultationEmail name={name} />);
	const from = `CALM Therapy <${process.env.INFO_EMAIL}>`;
	const text = `Hi ${name},

Thank you for reaching out to schedule a consultation. We know that starting this process can take a lot of thought, and we're honored that you're considering CALM Therapy to be part of your journey.

Before moving forward, we want to let you know that we're an out-of-network provider and do not accept insurance directly. However, most of our clients receive reimbursement through their insurance providers for out-of-network services.

You can find more details about our fees and insurance here: https://www.calmtherapy.center/insurance

Your therapist will also be happy to answer any questions during the consultation. If you'd like to move forward, please use the link below to schedule your free consultation with Dr. Tanya Singh:

${calendlyLinkUrl}

Warmly,  
The CALM Therapy Team`;
	const autoResponseOptions = {
		from,
		to: email,
		bcc: process.env.INFO_EMAIL,
		subject: "Thank you for contacting CALM Therapy",
		text,
		html: html,
	};

	return autoResponseOptions;
}
