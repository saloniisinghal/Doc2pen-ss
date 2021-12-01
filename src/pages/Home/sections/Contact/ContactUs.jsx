import React from "react";
import ExperienceForm from "./components/ExperienceForm/ExperienceForm";
import styles from "./contact-us.module.scss";

function ContactUs() {
	

	return (
		<div className={styles.ContactUs} id="home_contact">
			<div className={styles.contact_and_info_container}>
				<ExperienceForm />
			</div>
		</div>
	);
}

export default ContactUs;
