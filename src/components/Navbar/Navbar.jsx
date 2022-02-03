import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import { GoThreeBars } from "react-icons/go";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	const navCenterContainer = useRef(null);
	const closeLinks = () => {
		setShowLinks(false);
	};
	const activeStyle = ({ isActive }) => {
		return {
			color: isActive ? "#f3a4cc" : "",
		};
	};
	useEffect(() => {
		if (showLinks) {
			navCenterContainer.current.style.height = `100vh`;
			document.body.style.overflow = "hidden";
		} else {
			navCenterContainer.current.style.height = "0px";
			document.body.style.overflow = "visible";
		}
	}, [showLinks]);

	return (
		<nav className={styles.nav}>
			<div className={styles.navHead}>
				<Link to="/" className={styles.logo}>
					Serenity.js
				</Link>
				<button
					className={styles.navToggle}
					onClick={() => {
						setShowLinks(!showLinks);
					}}
				>
					<GoThreeBars />
				</button>
			</div>
			<div className={styles.navCenter} ref={navCenterContainer}>
				<NavLink to="/" style={activeStyle} onClick={closeLinks}>
					Home
				</NavLink>
				<NavLink to="/docs" style={activeStyle} onClick={closeLinks}>
					Documentation
				</NavLink>
				<NavLink to="/contact" style={activeStyle} onClick={closeLinks}>
					Contact Us
				</NavLink>
				<Link to="/api" className={styles.toggleNavEnd} onClick={closeLinks}>
					Test Api
				</Link>
			</div>
			<div className={styles.navEnd}>
				<Link to="/api" onClick={closeLinks}>
					Test API
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
