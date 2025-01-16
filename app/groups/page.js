import {
	faEnvelope,
	faMailBulk,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import agImg from "./assets/images/adultgroup.png";

function Groups() {
	return (
		<main id="groups">
			<section id="prog-title">
				<div
					role="image"
					className="prog-image"
					alt="group of older adults celebrating"
					style={{ backgroundImage: `url('${agImg.src}')` }}
				></div>
				<div className="title-content">
					<h1>Resilient Living: Anxiety Management for Older Adults</h1>
					<h2>
						A 10-Week Virtual Group to Foster Understanding, Connection, and
						Calm
					</h2>
					<p>
						As we age, managing anxiety can feel overwhelming. This group is
						designed specifically for older adults to help you better understand
						and navigate anxiety in a supportive, compassionate environment.
						Over 10 weeks, you{"'"}ll learn practical tools, gain valuable
						insights, and connect with others who share similar experiences.
					</p>
				</div>
			</section>
			<section id="prog-desc">
				<h2>What to Expect Each Week</h2>
				<ul className="week-desc">
					<li>
						<h3>Week 1: Welcome and Setting Intentions</h3>
						<p>
							Meet your group members, set goals, and learn how anxiety impacts
							older adults. Begin with simple breathwork techniques.
						</p>
					</li>
					<li>
						<h3>Week 2: Understanding the Mind-Body Connection</h3>
						<p>
							Explore how anxiety affects the mind and body and learn body-based
							skills to manage anxiety.
						</p>
					</li>
					<li>
						<h3>Week 3: Mindfulness and Present-Moment Awareness</h3>
						<p>
							Learn how mindfulness can reduce anxiety, how you can incorporate
							it in your everyday life and participate in a guided mindfulness
							meditation.
						</p>
					</li>
					<li>
						<h3>Week 4: Identifying and Managing Thinking Traps</h3>
						<p>
							Understand common unhelpful thought patterns and learn strategies
							to manage them effectively.
						</p>
					</li>
					<li>
						<h3>Week 5: Coping with Loneliness</h3>
						<p>
							Understand the link between isolation and anxiety, and discover
							ways to build meaningful connections.
						</p>
					</li>
					<li>
						<h3>Week 6: Strategies for Managing Worry and Rumination</h3>
						<p>
							Learn the difference between productive and unproductive worry and
							try practical tools like “scheduled worry time” and “diffusion”
							from thoughts.
						</p>
					</li>
					<li>
						<h3>Week 7: Building Resilience Through Lifestyle Choices</h3>
						<p>
							Understand how sleep, exercise, and nutrition can improve anxiety
							and overall well-being.
						</p>
					</li>
					<li>
						<h3>Week 8: Coping with Uncertainty and Life Transitions</h3>
						<p>
							Address fears around aging and uncertainty while practicing
							acceptance and values-based actions.
						</p>
					</li>
					<li>
						<h3>Week 9: Purpose and Meaning in Later Life</h3>
						<p>
							Explore how finding purpose and identifying personal values can
							reduce anxiety and foster fulfillment.
						</p>
					</li>
					<li>
						<h3>Week 10: Reflection and Moving Forward</h3>
						<p>
							Celebrate your progress, reflect on key takeaways, and create a
							personalized plan for continued anxiety management.
						</p>
					</li>
				</ul>
			</section>
			<section className="prog-desc-two">
				<ul>
					<h3>Why Join This Group?</h3>
					<li>
						<p>
							<strong>Learn Proven Tools: </strong>Gain practical strategies to
							manage anxiety tailored to older adults.
						</p>
					</li>
					<li>
						<p>
							<strong>Foster Connection: </strong>Share your journey in a safe,
							supportive community of peers.
						</p>
					</li>
					<li>
						<p>
							<strong>Build Resilience: </strong>Discover ways to feel more
							calm, confident, and in control.
						</p>
					</li>
				</ul>
				<ul>
					<h3>Details:</h3>
					<li>
						<p>
							<strong>Format: </strong>Weekly virtual sessions.
						</p>
					</li>
					<li>
						<p>
							<strong>Duration: </strong>10 weeks.
						</p>
					</li>
					<li>
						<p>
							<strong>Who It{"'"}s For: </strong>Older adults seeking a
							supportive space to better understand and manage.
						</p>
					</li>
				</ul>
			</section>
			<section id="prog-cta">
				<h2>Join Us</h2>

				<h3>
					Interested? Please fill out{" "}
					<a href="https://forms.gle/vcGe8wptzNnWADoTA" target="_blank">
						this survey
					</a>{" "}
					and we will get back to you in 48 hours
				</h3>

				<h3>
					If you have any questions, please email us at{"	"}
					<a href="mailto:tsingh@calmtherapy.center">
						tsingh@calmtherapy.center
					</a>
				</h3>
			</section>
		</main>
	);
}

export default Groups;
