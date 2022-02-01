import React, { useRef, useState } from "react";
import styles from "./Contact.module.scss";
import axios from "axios";
function ContactUs() {
	const nameRef = useRef(null);
	const designationRef = useRef(null);
	const emailRef = useRef(null);
	const phoneRef = useRef(null);
	const contentRef = useRef(null);
	const [disabled, setDisabled] = useState(false);
	const handleSubmit = async () => {
		setDisabled(true);
		const reqBody = {
			name: nameRef.current.value,
			designation: designationRef.current.value,
			email: emailRef.current.value,
			phone: phoneRef.current.value,
			content: contentRef.current.value,
		};
		const res = await axios.post("https://api.myserenity.live/contact", reqBody);
		console.log(res.data.success);
		setDisabled(false);
	};
	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div>
					<span>Hola! </span>How can we help you today?
				</div>
				<p>Contact us for a demo, technical queries, or support. We are always here for you.</p>
			</div>
			<form className={styles.wrapper}>
				<div className={styles.inputContainer}>
					<label htmlFor="name">Name</label>
					<input id="name" type="text" placeholder="Elon Musk" ref={nameRef} />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="designation">Designation</label>
					<input id="designation" type="text" placeholder="CEO" ref={designationRef} />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="email">Email</label>
					<input id="email" type="text" placeholder="name@organization.com" ref={emailRef} />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="phone">Phone number</label>
					<input id="phone" type="text" placeholder="+1 999 999 9999" ref={phoneRef} />
				</div>
				<div className={`${styles.inputContainer} ${styles.textAreaContainer}`}>
					<label htmlFor="content">How can we help you?</label>
					<textarea
						id="content"
						cols="30"
						rows="5"
						placeholder="Jot down your query here"
						ref={contentRef}
					></textarea>
				</div>
				<button type="submit" disabled={disabled} className={styles.btn} onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactUs;
