import React from "react";
import styles from "./Docs.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
function Docs() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.contentContainer}>
				<section className={styles.start}>
					<h1>Getting Started</h1>
					<p>Welcome to Serinity.js documentation!</p>
					<p>
						If you're new to Serenity.js we recommend you to try our API <Link to="/api">here</Link>
						.
					</p>
					<p>
						If you have questions about anything related to Serinity.js, you're always welcome to{" "}
						<Link to="/contact">contact us</Link>.
					</p>
					<div className={styles.headingWithList}>
						<h2>Prerequisites</h2>
						<ul>
							<li>
								<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
									Node.js
								</a>
							</li>
							<li>MacOS, Windows (including WSL), and Linux are supported</li>
						</ul>
					</div>
				</section>
				<section className={styles.about}>
					<h1>About Serinity.js</h1>
					<p>Serenity.js is a REST API that helps you detect racial micro-aggression and abuse.</p>
					<p>It uses the power of Natural Language Processing to do so.</p>
					<div className={styles.headingWithList}>
						<h2>Built With</h2>
						<ul>
							<li>
								<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
									Node.js
								</a>
							</li>
							<li>
								<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
									React.js
								</a>
							</li>
							<li>
								<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
									Python
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.route}>
						<h2>API Routes</h2>
						<table>
							<tr>
								<th>Route</th>
								<th>Description</th>
							</tr>
							<tr>
								<td>/predict</td>
								<td>
									Get request on route '/predict' to check whether there are traces of hate speech
									in an input or not.
								</td>
							</tr>
						</table>
					</div>
				</section>
				<section className={styles.setup}>
					<h1>Setup</h1>
				</section>
				<section className={styles.testing}>
					<h1>Testing</h1>
				</section>
			</div>
		</div>
	);
}

export default Docs;
