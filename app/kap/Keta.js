import React from "react";

import Link from "next/link";
import KapProcess from "./KapProcess";
import KapIntro from "./KapIntro";
import KapEligibility from "./KapEligibility";
import { KapInvestment } from "./KapInvestment";

function Keta() {
	return (
		<main id="keta">
			<KapIntro />

			<KapProcess />

			<KapEligibility />

			<KapInvestment />

			<section className="keta-box">
				<div className="content">
					<h2>Safety and Ethical Considerations</h2>

					<ul>
						<li>
							<strong>Remote-first model:</strong> All KAP sessions are
							currently conducted via secure telehealth. While some providers
							offer in-person sessions, our practice is fully virtual for now.
						</li>
						<li>
							<strong>Optional in-person dosing (limited):</strong> For clients
							who strongly prefer to begin with in-person dosing, we may be able
							to offer up to two house-call sessions. This option depends on
							your location, timing, and clinical fit. If available, additional
							travel fees may apply.
						</li>
						<li>
							<strong>Chaperone support:</strong> For remote dosing, a trusted
							support person must be present in your home during the session.
							They do not need to participate, but should be nearby in case of
							any safety concerns.
						</li>
						<li>
							<strong>Medical oversight:</strong> All medical decisions,
							including screening, prescribing, and follow-up, are handled by
							licensed prescribers at Journey Clinical.
						</li>
						<li>
							<strong>Ethical foundation:</strong> I follow all professional and
							legal guidelines for the safe, ethical, and compassionate delivery
							of psychedelic-assisted therapy.
						</li>
					</ul>
				</div>
			</section>

			<section className="keta-box alt keta-links">
				<div className="content">
					<h2>Further Reading & Resources</h2>
					<ul>
						<li>
							<Link
								href="https://www.journeyclinical.com/patients"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Journey Clinical - KAP for Patients
							</Link>
						</li>
						<li>
							<Link
								href="https://www.journeyclinical.com/resources"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Journey Clinical - KAP 101 Guide
							</Link>
						</li>
						<li>
							<Link
								href="https://maps.org/research-archive/mdma/MDMA-Ketamine_Paradigms_RaquelBennett.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Paradigms of Ketamine Treatment - Raquel Bennett, Psy.D. (MAPS)
							</Link>
						</li>
						<li>
							<Link
								href="https://pubmed.ncbi.nlm.nih.gov/30360952/"
								target="_blank"
								rel="noopener noreferrer"
								className="link"
							>
								Research Study: KAP Outcomes in Three Large Practices - Dore et
								al., 2018
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}

export default Keta;
