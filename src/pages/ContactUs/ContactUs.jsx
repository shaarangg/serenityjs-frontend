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
					<label htmlFor="">Name</label>
					<input type="text" placeholder="Elon Musk" />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="">Designation</label>
					<input type="text" placeholder="CEO" />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="">Email</label>
					<input type="text" placeholder="name@organization.com" />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="">Phone number</label>
					<input type="text" placeholder="+1 999 999 9999" />
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="">How can we help you?</label>
					<input type="text" placeholder="Enter your query" />
				</div>
				<button type="submit" className={styles.btn}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactUs;
