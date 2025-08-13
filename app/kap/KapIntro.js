import Image from "next/image";
import ketaBrain from "./assets/images/keta.webp";

export default function KapIntro() {
	return (
		<section className="kap-intro keta-header">
			<div className="content">
				<div className="img-container">
					<Image
						src={ketaBrain.src}
						alt="illustration of brain meditating"
						width={320}
						height={480}
						priority
						sizes="(max-width: 768px) 250px, 320px"
					/>
				</div>
				<div className="text">
					<h1>Ketamine-Assisted Psychotherapy (KAP)</h1>
					<i>A grounded and integrative path toward healing</i>
					<p>
						Ketamine-Assisted Psychotherapy (KAP) can be a powerful catalyst for
						emotional healing, especially when approached with intention and
						support. At CALM, we see KAP as one part of a larger journey, a
						practice that deepens and complements the work you{"'"}re already
						doing to understand yourself and heal.
					</p>
					<p>
						We strongly recommend a consistent baseline of care before, during,
						and after the KAP journey. KAP can be done on its own, but it{"'"}s
						most effective when embedded in a larger healing framework.
					</p>
					<p>
						Ketamine{"'"}s effects can include enhanced emotional openness,
						reduced reactivity, and temporary relief from symptoms of anxiety,
						depression, and obsessive thought patterns. In a therapeutic
						setting, this creates space for new perspectives, deeper insight,
						and meaningful breakthroughs.
					</p>
				</div>
			</div>
		</section>
	);
}
