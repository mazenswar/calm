import React from "react";
import butterflies from "./assets/butterflies.jpg";
function Specialities() {
	function truncate(str, id) {
		return str.length > 500 ? (
			<div className="trunc-text">
				<p>
					{str.substring(0, 499)}...
					<span>
						<a href="/about/#specialities-section" className="read-more">
							Read more
						</a>
					</span>
				</p>
			</div>
		) : (
			input
		);
	}
	return (
		<section className="home-specialities">
			<h1 className="center-title title">Things I can help with</h1>
			<div className="text">
				<h2>Anxiety and Related Disorders</h2>

				{truncate(
					"Anxiety is a normal emotion that we all experience from time to time. However, for people with anxiety disorders (ADs), facing everyday tasks can often feel debilitating. Individuals with ADs struggle with persistent, intense and excessive worry, panic or stress that affects both their physical and mental well-being. Despite many efforts to control the worrying, professional help is sometimes necessary to regain control of one's life.\n\nThere are many different types of ADs that affect individuals of all ages and ethnicities, such as generalized anxiety disorder, panic disorder, social anxiety disorder, social phobias to name a few. Fortunately, today there are many effective evidence-based treatments available for all types of anxiety.\n\nBroadly, these treatments will help you gain more awareness of your symptoms and learn adaptive coping strategies to manage them. Cognitive Behavioral Therapy (CBT) has been shown to be particularly effective in treating anxiety related disorders. Using a collaborative and person-centered approach, we will explore your thoughts and assumptions about your fears and learn to challenge them. In addition, we will utilize behavioral approaches that will help you face your fears in a safe environment and gradually reintroduce activities you may have avoided due to anxiety. Through therapy you will be able to learn different skills to manage your thoughts and emotions and find joy in your everyday life."
				)}

				<h2>Depression</h2>
				{truncate(
					"Depression is a serious mood disorder characterized by frequent and persistent feelings of sadness. However, its effects are not simply limited to one’s mood but impact an individual's thoughts, functioning, relationships and overall quality of life. Those struggling with depression may find that they have lost interest in activities they previously enjoyed, have sleep and memory difficulties, problem concentrating, appetite changes, irritability, hopelessness, low self-esteem, and physical symptoms such as aches or pains. Individuals with depression may also struggle with frequent thoughts of suicide. These symptoms cause significant distress in an individual's and their loved one's lives.\n\nIt is important to distinguish depression from sadness, which is a normal human emotion. Most of us feel sad from time to time. However, depression is marked by a pervasive low mood as well as the presence of some of the above-mentioned symptoms more often than not. As with most mental health problems, early detection and treatment is key. In addition to providing a safe space for understanding and processing your emotions, in treatment you will learn the skills necessary to help manage and reduce depressive episodes. Treatment will be individualized based on your specific symptom profile and will take into account your culture, environment, family structure and specific symptom profile."
				)}
				<h2>Obsessive Compulsive Disorder (OCD)</h2>
				{truncate(
					"OCD is a diagnosable mental health problem that intensely disrupts the life of the person living with it. It can often feel like living with a bully in your own head. People with OCD experience repeated obsessions and compulsions. The obsessions may present as thoughts, mental images or ideas that are unwanted and/or inappropriate and cause significant distress and anxiety. Compulsions are physical or mental acts people feel compelled to engage in to provide relief from the obsessions. These may include mental compulsions such as counting, making lists, praying, replaying memories etc. or physical compulsions such as reassurance seeking, order checking etc.\n\nWhen most people think of OCD, they imagine a person repeatedly handwashing or repeating words a specific number of times. While these may be signs of a person struggling with OCD, the disease can show up in innumerable ways. In reality, there are so many ways to have OCD such that it may only be limited by human imagination. Fortunately, the research on OCD has advanced tremendously and there are various evidence-based approaches to help those who are struggling.\n\nExposure and Response Prevention (ERP) is the gold-standard behavioral treatment for OCD. It involves approaching your feared situations in a graded manner. In therapy we will collaboratively create a fear hierarchy for you, that will consist of situations that bring about feelings of little to extreme discomfort. Simultaneously, we will work to understand the compulsions you engage in and try to approach those situations without engaging in those reassuring behaviors. In essence, we will work on building your capacity to tolerate discomfort, so you are able to engage in life fully. In addition to ERP, there are many different approaches that can help enhance the effect of the treatment, such as mindfulness and various cognitive strategies. As a process-based therapist, my goal is to target the mechanisms that keep your OCD going and help you identify and utilize the tools that would be most advantageous and compatible with your unique individuality so you can regain control of your life."
				)}

				<a href="/about/#specialities-section" className="read-more">
					<h3>Click here for full list of specialities</h3>
				</a>
			</div>
			<div className="image-container">
				<div
					className="image"
					style={{ backgroundImage: `url(${butterflies.src})` }}
				></div>
			</div>
		</section>
	);
}

export default Specialities;
