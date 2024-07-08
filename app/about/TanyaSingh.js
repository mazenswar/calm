import React from "react";
import tnt from "./assets/images/tnt.jpg";
import Image from "next/image";

function TanyaSingh() {
	return (
		<section className="ts">
			<h1 className="center-title">Dr. Tanya Singh, Ph.D.</h1>
			<div className="grid">
				<div className="image-container">
					<Image className="image" src={tnt} alt="tanya" />
				</div>
				<div className="text">
					<h4>
						Licensed Clinical Psychologist | Co-Founder & Director, CALM (Center
						for Anxiety and Life Management)
					</h4>

					<h3>About Me</h3>
					<p>
						I{"'"}m a passionate clinical psychologist on a mission to help
						individuals conquer anxiety and life-related challenges with a warm
						heart and a wealth of experience. I{"'"}ve dedicated my career to
						making a positive impact on people{"'"}s lives. At CALM (Center for
						Anxiety and Life Management), I have co-created a safe haven where
						healing begins. We believe in nurturing resilience and empowering
						people to thrive.
					</p>

					<h3>Credentials</h3>
					<p>
						I hold a PhD and masters degree in Clinical Psychology from
						Montclair State University and an MA in Psychology in Education from
						Teachers College, Columbia University. I completed my Postdoctoral
						Fellowship at the CBT Center for Anxiety & OCD in PA and my
						Predoctoral internship at Rutgers University Behavioral Health Care.
						I have also trained and worked at a variety of esteemed
						institutions, including Harvard University, Massachusetts General
						Hospital, SUNY Downstate Medical Center, and the Molecular Imaging
						and Neuropathology Division at the New York State Psychiatric
						Institute (NYSPI), as well as multiple private practices. I am also
						an author of 9 peer-reviewed articles and 3 book chapters and have
						presented at various conferences and workshops.
					</p>
					<h3>Specialization</h3>
					<p>
						I specialize in treating a range of anxiety and obsessive compulsive
						related disorders, including Generalized Anxiety Disorder (GAD),
						Social Anxiety Disorder (SAD), Obsessive-Compulsive Disorder (OCD),
						Perfectionism, and Body Dysmorphic Disorder (BDD) etc. My
						integrative approach to therapy combines Cognitive Behavioral
						Therapy (CBT) with Internal Family Systems (IFS), Acceptance and
						Commitment Therapy (ACT), Dialectical Behavior Therapy (DBT),
						mindfulness-based approaches, and Inference-Based Cognitive
						Behavioral Therapy (I-CBT).
					</p>
				</div>
			</div>

			<h3>Why I Love What I Do</h3>
			<h4>Deep Connections</h4>
			<p>
				Connecting with diverse individuals daily fuels my passion and reminds
				me why I chose this path.
			</p>
			<h4>Meaningful Impact</h4>
			<p>
				Witnessing transformation, whether helping someone conquer panic attacks
				or guiding them toward self-acceptance, is my greatest reward.
			</p>
			<h4>Real-Life Insights</h4>
			<p>
				My work allows me to step into others{"'"} shoes, gaining profound
				insights into their experiences, keeping me grounded and empathetic.
			</p>
			<h3>From India to the US</h3>
			<h4>Cultural Fusion</h4>
			<p>
				Growing up in India and pursuing my studies in the US, I{"'"}ve woven
				together a rich tapestry of cultural influences, reflected in my values,
				principles, and dreams.
			</p>
			<h4>Curious Explorer</h4>
			<p>
				Beyond my practice, I{"'"}m an avid learner, exploring the mysteries of
				consciousness and the wisdom of Buddhism.
			</p>
			<h4>Nature Lover</h4>
			<p>
				You{"'"}ll find me taking serene nature walks, savoring new cuisines,
				and sharing laughter with the kids in my life.
			</p>
			<h4>Let{"'"}s Connect</h4>
			<p>
				I{"'"}m here to listen, guide, and support you on your journey toward
				inner peace. Reach out—I{"'"}d love to be part of your story.
			</p>
		</section>
	);
}

export default TanyaSingh;

function Education() {
	return (
		<>
			<h2>Education</h2>
			<ul>
				<li>
					<p>Ph.D. in Clinical Psychology, Montclair State University, NJ</p>
				</li>
				<li>
					<p>M.A. in Clinical Psychology, Montclair State University, NJ</p>
				</li>
				<li>
					<p>
						M.A. in Psychology in Education, Teachers College, Columbia
						University, NY
					</p>
				</li>
				<li>
					<p>B.A in Psychology, Jacksonville University, Fl</p>
				</li>
				<li>
					<p>B.A. in Communications, Jacksonville University, Fl</p>
				</li>
			</ul>
		</>
	);
}

function Training() {
	return (
		<>
			<h2>Training</h2>
			<ul>
				<li>
					<p>
						Postdoctoral Fellowship: CBT Center for Anxiety & OCD, Media, PA
					</p>
				</li>
				<li>
					<p>
						Predoctoral Internship: Rutgers University Behavioral Health Care,
						New Brunswick, NJ
					</p>
				</li>
			</ul>
		</>
	);
}

function Dissertation() {
	return (
		<>
			<h2>Dissertation</h2>
			<ul>
				<li>
					<p>
						Factors Related to Formal and Online Help-seeking Behaviors among
						Latinx College Students
					</p>
				</li>
			</ul>
		</>
	);
}
// Dissertation:
// 	•	Factors Related to Formal and Online Help-seeking Behaviors among Latinx College Students
