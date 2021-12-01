import React from "react";
import { Fade } from "react-reveal";
import styles from "./footer.module.scss";

export default function Footer() {
	return (
		<div className={`${styles.footerDiv}`}>
			<div className={styles.tint}></div>
			<div>
				<Fade>
					<p className={styles.footerText}>
						{("Mail us : doc2pen@gmail.com")}
					</p>
				</Fade>
			</div>
		</div>
	);
}
