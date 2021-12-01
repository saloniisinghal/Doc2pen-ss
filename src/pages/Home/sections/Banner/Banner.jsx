import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./banner.module.scss";


function Banner() {
	const history = useHistory();
	function redirectToEditor() {
		history.push("/editor");
	}

	return (
		<section className={styles.Home} id="home_banner">
			<div className={styles.content}>
				<div className={styles.text}>
					<div>Type Documents in your own Handwriting.</div>
					<button className={styles.button} onClick={redirectToEditor}>
						CHECK IT OUT!
					</button>
				</div>
			</div>
		</section>
	);
}

export default Banner;
