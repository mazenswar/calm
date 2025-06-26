import "./scss/style.scss";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NewNav from "./components/NewNav";
import ContactButton from "./components/ContactButton";
import { Raleway, Tajawal } from "next/font/google";
import Script from "next/script";

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
			<head>
				<Script
					id="gtm-init"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
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
       `,
					}}
				/>
				<link rel="icon" href="/CALM_E2.png" sizes="any" />
			</head>
			<body className={`${raleway.className} ${tajawal.className}`}>
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
