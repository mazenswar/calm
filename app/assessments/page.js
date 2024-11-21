import React from "react";

function SelfAssessmentScales() {
	return (
		<main id="assessments">
			<section className="scales">
				<h1 className="center-title">Self Assessment Scales</h1>
				<h5>
					Below are self-assessment scales that can be self-administered. Please
					note that scores above a cut-off indicate clinically significant
					symptoms, but these tools alone are insufficient for a mental health
					diagnosis.
				</h5>
				<h5>
					Please note that the Center for Anxiety and Life Management does not
					receive the scores if you take the assessments at home.
				</h5>
				<div className="assess-container">
					<h4>Anxiety</h4>
					<a href="https://www.hiv.uw.edu/page/mental-health-screening/gad-7">
						GAD-7 (Generalized Anxiety Disorder-7)
					</a>
					<p>
						A brief 7-item scale used to assess generalized anxiety disorder in
						individuals aged 11 and older.
					</p>
				</div>
				<div className="assess-container">
					<h4>OCD</h4>
					<a href="https://www.ocdtypes.com/oci-r-test.php">
						OCI-R (Obsessive-Compulsive Inventory-Revised)
					</a>
					<p>
						An 18-item self-report scale designed to assess the severity of OCD
						symptoms. Suitable for use with adults and adolescents over 16 years
						of age.
					</p>
				</div>
				<div className="assess-container">
					<h4>Depression</h4>
					<a href="https://www.hiv.uw.edu/page/mental-health-screening/phq-9">
						PHQ-9 (Patient Health Questionnaire-9)
					</a>
					<p>
						A 9-item depression scale that is widely used and validated.
						Appropriate for individuals over 18 years of age.
					</p>
				</div>
			</section>
		</main>
	);
}

export default SelfAssessmentScales;

//
// 3. **Depression:**
//    - **PHQ-9 (Patient Health Questionnaire-9):**
//      - A 9-item depression scale that is widely used and validated. Appropriate for individuals over 18 years of age.
//      - [PHQ-9 Scale](https://www.hiv.uw.edu/page/mental-health-screening/phq-9)

// ### Call to Action

// If you or someone you know is struggling with mental health issues, please consider reaching out to a mental health professional for a comprehensive evaluation and personalized treatment plan. Self-assessments and online resources are valuable tools, but they are not substitutes for professional care.
