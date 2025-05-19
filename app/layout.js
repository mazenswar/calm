import "./scss/style.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Calendly from "./components/Calendly";
import CalendlyLink from "./components/CalendlyLink";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NewNav from "./components/NewNav";
import ContactButton from "./components/ContactButton";
export const metadata = {
	title: "Center for Anxiety and Life Management (Calm Therapy)",
	description:
		"CALM Therapy treats anxiety, OCD & life transitions with evidence-based approaches. We offer virtual therapy for Pennsylvania, New York & New Jersey residents.",
	verification: {
		google: "HLY4tQ5zcfv4L7ffmk3EhUPPJfnFOITw6Hd8-YAP20Y",
	},
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<link rel="icon" href="/CALM_E2.png" sizes="any" />

				<NewNav />
				<ContactButton />
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-FF7QZWYSJL" />
		</html>
	);
}
