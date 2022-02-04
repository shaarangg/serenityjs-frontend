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
						<a
							href="#preq"
							onClick={() => {
								setShowBar(false);
							}}
						>
							Getting Started
						</a>
					</li>
					<li>
						<a
							href="#preq"
							onClick={() => {
								setShowBar(false);
							}}
						>
							Prerequisites
						</a>
					</li>
					<li>
						<a
							href="#about"
							onClick={() => {
								setShowBar(false);
							}}
						>
							About Serinity.js
						</a>
					</li>
					<li>
						<a
							href="#built"
							onClick={() => {
								setShowBar(false);
							}}
						>
							Built With
						</a>
					</li>
					<li>
						<a
							href="#routes"
							onClick={() => {
								setShowBar(false);
							}}
						>
							API Routes
						</a>
					</li>
					<li>
						<a
							href="#setup"
							onClick={() => {
								setShowBar(false);
							}}
						>
							Setup
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
