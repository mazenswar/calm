import { render } from "@react-email/render";
import { ConsultationEmail } from "../lib/clientAutoResponseTemplate";

export default async function EmailPreview() {
	const html = await render(<ConsultationEmail name="Test User" />);

	return (
		<div
			dangerouslySetInnerHTML={{ __html: html }}
			style={{
				padding: "2rem",
				border: "1px solid #ccc",
				fontFamily: "sans-serif",
				backgroundColor: "#fff",
			}}
		/>
	);
}
