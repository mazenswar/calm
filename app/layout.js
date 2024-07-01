import { Inter } from "next/font/google";
import "./scss/style.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Center for Anxiety and Life Management (Calm)",
	description: "Individual online therapy in New York and Pennsylvania",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<link rel="icon" href="/CALM_E2.png" sizes="any" />
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
