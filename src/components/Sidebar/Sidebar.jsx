import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./Sidebar.module.scss";
export default function Sidebar() {
	const [showBar, setShowBar] = useState(false);
	return (
		<div className={styles.container}>
			<button
				className={styles.sideToggle}
				onClick={() => {
					setShowBar(!showBar);
				}}
			>
				{showBar ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
				<p>Menu</p>
			</button>
			<ul className={styles.list}>
				<p>Documentation</p>
				<li>
					<a href="">Getting Started</a>
				</li>
				<li>
					<a href="">Prerequisites</a>
				</li>
				<li>
					<a href="">About Serinity.js</a>
				</li>
				<li>
					<a href="">Built With</a>
				</li>
				<li>
					<a href="">API Routes</a>
				</li>
				<li>
					<a href="">Setup</a>
				</li>
				<li>
					<a href="">Testing</a>
				</li>
			</ul>
		</div>
	);
}
