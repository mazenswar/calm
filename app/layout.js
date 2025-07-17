import "./scss/style.scss";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NewNav from "./components/NewNav";
import ContactButton from "./components/ContactButton";
import { Inter, Roboto, Lexend } from "next/font/google";

import Script from "next/script";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "600"], // add 500/700 if needed
	display: "swap",
	variable: "--font-inter",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "700"], // add 500/700 if needed
	display: "swap",
	variable: "--font-roboto",
});

const lexend = Lexend({
	subsets: ["latin"],
	weight: ["300", "400", "700"], // add 500/700 if needed
	display: "swap",
	variable: "--font-lexend",
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
		<html lang="en" className={lexend.variable}>
			<head>
				<Script
					id="gtm-init"
					strategy="lazyOnload"
					dangerouslySetInnerHTML={{
						__html: `
setTimeout(function(){
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'? '&l='+l : '';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
}, 5000);
       `,
					}}
				/>
				<link rel="icon" href="/CALM_E2.png" sizes="any" />
			</head>
			<body>
				<noscript>
					<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				<NewNav />

				<ContactButton />
				{children}
				<Footer />
			</body>
		</html>
	);
}
