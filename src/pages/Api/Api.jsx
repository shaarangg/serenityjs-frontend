import axios from "axios";
import React, { useRef, useState } from "react";
import styles from "./Api.module.scss";
function Api() {
	const textRef = useRef(null);
	const [status, setStatus] = useState("");
	const [disabled, setDisabled] = useState(false);
	const handleSubmit = async () => {
		setDisabled(true);
		const res = await axios.post("https://api.myserenity.live/predict", {
			text: textRef.current.value,
		});
		console.log(res);
		setStatus(res.data);
		setDisabled(false);
	};
	return (
		<div className={styles.container}>
			<textarea name="" id="" placeholder="Enter text" ref={textRef}></textarea>
			<div className={styles.btnContainer}>
				<button type="submit" disabled={disabled} onClick={handleSubmit}>
					Submit
				</button>
				<p>Class: {status}</p>
			</div>
		</div>
	);
}

export default Api;
