import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./Sidebar.module.scss";
export default function Sidebar() {
	const [showBar, setShowBar] = useState(true);
	const listRef = useRef(null);

	useEffect(() => {
		if (showBar) {
			listRef.current.style.height = "100vh";
		} else {
			listRef.current.style.height = "0px";
			console.log(listRef);
		}
	});

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
			<ul className={styles.list} ref={listRef}>
				<p>Documentation</p>
				<li>
					<span></span>
					<a href="">Getting Started</a>
				</li>
				<li>
					<span></span>
					<a href="">Prerequisites</a>
				</li>
				<li>
					<span></span>
					<a href="">About Serinity.js</a>
				</li>
				<li>
					<span></span>
					<a href="">Built With</a>
				</li>
				<li>
					<span></span>
					<a href="">API Routes</a>
				</li>
				<li>
					<span></span>
					<a href="">Setup</a>
				</li>
				<li>
					<span></span>
					<a href="">Testing</a>
				</li>
			</ul>
		</div>
	);
}
