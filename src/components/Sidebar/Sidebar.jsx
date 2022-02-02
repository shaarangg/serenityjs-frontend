import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./Sidebar.module.scss";
export default function Sidebar() {
	const [showBar, setShowBar] = useState(true);
	const listRef = useRef(null);
	useEffect(() => {
		if (showBar) {
			listRef.current.style.display = "block";
			document.body.style.overflow = "hidden";
		} else {
			listRef.current.style.display = "none";
			document.body.style.overflow = "visible";
		}
	}, [showBar]);

	return (
		<nav className={styles.nav}>
			<button
				className={styles.sideToggle}
				onClick={() => {
					setShowBar(!showBar);
				}}
			>
				<div>
					{showBar ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
					<p>Menu</p>
				</div>
			</button>
			<div className={styles.list} ref={listRef}>
				<ul>
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
		</nav>
	);
}
