import React from "react";
import styles from "./Contact.module.scss";
function ContactUs() {
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
					<input id="name" type="text" placeholder="Elon Musk" />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="designation">Designation</label>
					<input id="designation" type="text" placeholder="CEO" />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="email">Email</label>
					<input id="email" type="text" placeholder="name@organization.com" />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="phno">Phone number</label>
					<input id="phno" type="text" placeholder="+1 999 999 9999" />
				</div>
				<div className={`${styles.inputContainer} ${styles.textAreaContainer}`}>
					<label htmlFor="content">How can we help you?</label>
					<textarea
						id="content"
						cols="30"
						rows="5"
						placeholder="Jot down your query here"
					></textarea>
				</div>
				<button type="submit" className={styles.btn}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactUs;
