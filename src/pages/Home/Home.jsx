import React from "react";
import styles from "./Home.module.scss";
function Home() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>The React Framework for Production</h2>
			<p className={styles.content}>
				With our project we aim to tackle this problem in online social media platforms where we use
				Natural Language Processing to detect and correct racism as well as all forms of
				microaggression and foul criticism. Our goal is to generate an online platform that has the
				ability to detect and correct such content to make the reduce the forms of online abuse and
				racism.
			</p>
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
