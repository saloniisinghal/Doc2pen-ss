import React from "react";
import styles from "./about.module.scss";
import step1 from "./../../../../assets/images/home-about/step1.svg";
import step2 from "./../../../../assets/images/home-about/step2.svg";


function Step(props) {
	return (
		<div className={`${styles.step} ${props.reverse && styles.step_reverse}`}>
			<div className={styles.illustration}>
				<img className={styles.image} src={props.img} alt="Page" />
			</div>
			<div className={styles.step_text}>
				<div className={styles.step_title}>{props.title}</div>
				<div className={styles.step_content}>{props.content}</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<div className={styles.About} id="home_about">
			<div className={styles.title}>About Us</div>
			<div className={styles.line}>
				The upcoming technologies have made education
                simple and easy.As the time is changing everything has shifted to online 
                platforms but as the time passes by students screen time has increased a lot which is harmful for 
                their health.It’s hard to concentrate in such situations and the process can be tiring too.
                This is where <b>DOC2PEN</b> comes in the picture it helps in converting typed documents to one’s 
                own customized handwritten notes.Handwritten notes engage more of the senses. The brain is 
                more active, so the learning process is enhanced.
				<div>
					<br/>DOC2PEN aims to save the students time and provide them with better sources so that they 
                    can focus more on the learning part rather than worrying about maintaining notes 
					DOC2PEN will help you to create a high-quality translation of digital text and convert it into 
                    a handwritten view. By combining fonts and settings, you can easily create a unique work and 
                    achieve the maximum result.
				</div>
			</div>

			<div className={styles.steps}>
				<Step
					img={step1}
					title="Step 1 : Type"
					content="Use our highly customisable Editor page to type in text and get a handwritten document!"
					reverse={false}
				/>
				
				<Step
					img={step2}
					title="Step 2 : Format"
					content="And in the end, use the Convertor page to convert your assignment into the appropriate format for submission!"
					reverse={true}
				/>
			</div>
		</div>
	);
}

export default About;
