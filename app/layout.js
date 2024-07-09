import "./scss/style.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
	title: "Center for Anxiety and Life Management (Calm Therapy)",
	description:
		"Center for Anxiety and Life Management (CALM Therapy) is a professional PLLC specializing in the treatment of anxiety-related disorders, including generalized anxiety disorder, OCD, body dysmorphia, and panic disorder. We use a variety of evidence-based approaches, such as CBT, ACT, and meta-cognitive approaches, to help manage these issues. Currently, we offer virtual therapy sessions for residents of Pennsylvania and New York.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<link rel="icon" href="/CALM_E2.png" sizes="any" />
				<Nav />
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-FF7QZWYSJL" />
		</html>
	);
}
