import Image from "next/image";
import cImg from "../assets/contact.webp";
import Form from "./Form";

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
						<h1>We're Happy You're Here</h1>

						<p>
							Our goal is to help you feel seen, heard, and supported. Whether
							it's your first time reaching out or you're returning to care,
							we're here to meet you exactly where you are.
						</p>
					</div>
				</div>
				<Form setFormState={setFormState} />
			</div>
		</section>
	);
}
