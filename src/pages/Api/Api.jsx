import React from "react";
import styles from "./Api.module.scss";
function Api() {
	return (
		<div className={styles.container}>
			<textarea name="" id="" placeholder="Enter text"></textarea>
			<div className={styles.btnContainer}>
				<button type="submit">Submit</button>
				<p>Class: </p>
			</div>
		</div>
	);
}

export default Api;
