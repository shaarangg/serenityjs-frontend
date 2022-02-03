import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./Sidebar.module.scss";
export default function Sidebar() {
	const [showBar, setShowBar] = useState(false);
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
						<a href="#preq">Getting Started</a>
					</li>
					<li>
						<span></span>
						<a href="#preq">Prerequisites</a>
					</li>
					<li>
						<span></span>
						<a href="#about">About Serinity.js</a>
					</li>
					<li>
						<span></span>
						<a href="#built">Built With</a>
					</li>
					<li>
						<span></span>
						<a href="#routes">API Routes</a>
					</li>
					<li>
						<span></span>
						<a href="#setup">Setup</a>
					</li>
					<li>
						<span></span>
						<a href="#testing">Testing</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
