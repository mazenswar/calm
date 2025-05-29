import "./scss/style.scss";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NewNav from "./components/NewNav";
import ContactButton from "./components/ContactButton";
import { Raleway, Tajawal } from "next/font/google";
import GTM from "./components/GTM";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
});
const tajawal = Tajawal({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "700", "800"],
	display: "swap",
});

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
			<body className={`${raleway.className} ${tajawal.className}`}>
				<link rel="icon" href="/CALM_E2.png" sizes="any" />

				<NewNav />
				<GTM />
				<ContactButton />
				{children}
				<Footer />
			</body>
		</html>
	);
}
