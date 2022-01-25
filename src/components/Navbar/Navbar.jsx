import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { GoThreeBars } from "react-icons/go";
function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	const navCenterContainer = useRef(null);
	useEffect(() => {
		if (showLinks) {
			navCenterContainer.current.style.height = `100vh`;
		} else {
			navCenterContainer.current.style.height = "0px";
		}
	}, [showLinks]);
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav-head">
					<a href="/" className="logo">
						Serenity.js
					</a>
					<button
						className="nav-toggle"
						onClick={() => {
							setShowLinks(!showLinks);
						}}
					>
						<GoThreeBars />
					</button>
				</div>
				<div className="nav-center" ref={navCenterContainer}>
					<a href="/">Home</a>
					<a href="/docs">Documentation</a>
					<a href="/contact">Contact Us</a>
					<a href="/api" className="toggle-nav-end">
						Test API
					</a>
				</div>
				<div className="nav-end">
					<a href="/api">Test API</a>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
