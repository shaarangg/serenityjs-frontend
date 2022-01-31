import React from "react";
import styles from "./Home.module.scss";
function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.title}>The React Framework for Production</div>
				<p className={styles.content}>
					Sernity.js aims to tackle the problem in social media platforms where it uses the power of
					Natural Language Processing to detect and correct racism as well as all forms of
					microaggression and foul criticism. It gives you the best developer experience by giving
					one call detection of hate speech in the input text.
				</p>
			</div>
			<div className={styles.btnContainer}>
				<button type="button" className={styles.Docsbtn}>
					Start Learning
				</button>
				<button type="button" className={styles.Apibtn}>
					Test API
				</button>
			</div>
		</div>
	);
}
export default Home;
