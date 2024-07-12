import "./scss/style.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
	title: "Center for Anxiety and Life Management (Calm Therapy)",
	description:
		"Center for Anxiety and Life Management (CALM Therapy) specializes in treating anxiety and obsessive compulsive related disorders like GAD, OCD, body dysmorphia, and panic disorder. We use evidence-based approaches, including CBT, ACT, and meta-cognitive techniques. Offering virtual therapy sessions for residents of Pennsylvania and New York.",
	verification: {
		google: "HLY4tQ5zcfv4L7ffmk3EhUPPJfnFOITw6Hd8-YAP20Y",
	},
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
