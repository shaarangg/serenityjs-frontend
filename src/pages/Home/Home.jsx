import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Authentic, Distinctive, Convenient. </div>
			<p className={styles.content}>
				Sernity.js aims to tackle the problem in social media platforms where it uses the power of
				Natural Language Processing to detect and correct racism as well as all forms of
				microaggression and foul criticism. It gives you the best developer experience by giving one
				call detection of hate speech in the input text.
			</p>
			<div className={styles.btnContainer}>
				<Link to="/docs" className={styles.Docsbtn}>
					Start Learning
				</Link>
				<Link to="/api" className={styles.Apibtn}>
					Test API
				</Link>
			</div>
		</div>
	);
}
export default Home;
