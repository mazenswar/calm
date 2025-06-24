import Image from "next/image";
import cImg from "../assets/contact.webp";
import CTAButton from "@/app/components/CTAButton";
import Link from "next/link";

export default function BookingSection({ setFormState }) {
	return (
		<section id="booking-section">
			<div className="content">
				<div className="card">
					<div className="img-container">
						<Image
							src={cImg.src}
							alt="contact us illustration"
							width={300}
							height={300}
							priority
						/>
					</div>
					<div className="text">
						<h1>
							We{"'"}re Happy You{"'"}re Here
						</h1>

						<p>
							Our goal is to help you feel seen, heard, and supported. Whether
							it{"'"}s your first time reaching out or you{"'"}re returning to
							care, we{"'"}re here to meet you exactly where you are.
						</p>
					</div>
				</div>
				<div className="cta-card text">
					<p className="strong">We{"'"}re an out-of-network provider</p>
					<p>
						This allows us to focus on high-quality, personalized care without
						the constraints of insurance. We offer transparent pricing and have
						a limited number of sliding scale spots available based on financial
						need. You{"'"}ll receive a receipt (called a superbill) after each
						session to submit to your insurance for potential reimbursement. For
						more infomation please visit our{" "}
						<Link className="link" href="/insurance">
							Fees & Insurance
						</Link>{" "}
						page
					</p>
					<CTAButton />
				</div>
			</div>
		</section>
	);
}
