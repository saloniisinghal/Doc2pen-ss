import React from "react";
import styles from "./experience-form.module.scss";


function ExperienceForm() {
	return (
		<div id="info" className={styles.info}>
			<div className={styles.general_info}>
				<h2>Contact us.</h2>
				<br />
				<div className={styles.contact_form}>
					<form
						action="https://formcarry.com/s/S2thQbCqEvW" method="POST" 
						className={styles.contact_form_container}
					>
						<div className={styles.circle}>
							<div className={styles.circle2}></div>
						</div>
						{/*modified the fields of the experience form*/}

						<div className={styles.fieldsWrap}>
							<div className={styles.inputDiv}>
								<input
									type="text"
									pattern="^[a-zA-Z]+$"
									placeholder="Your Name"
									required
									name="user-name"
									title="Only text is allowed."
									autoComplete="off"
								/>
								<input
									type="email"
									placeholder="Email Address"
									pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
									required
									name="email"
									title="Provide a valid email address"
									autoComplete="off"
								/>
								<input
									type="tel"
									autoComplete="off"
									pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
									title="Provide a valid Phone Number"
									maxLength="15"
									minLength="7"
									placeholder="Phone (Optional)"
								/>
							</div>
							<div className={styles.experience}>
								<span>Rate your experience:</span>
								
							</div>
							<textarea
								name="message"
								placeholder="Message..."
								required
							></textarea>
							<button
								className={styles.submit}
								type="submit"
							>
								<span className={styles.hoverEffect}></span>
								<span className={styles.buttonText}>Send</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ExperienceForm;
