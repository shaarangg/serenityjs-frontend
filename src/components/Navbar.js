import React, { useState } from "react";
import "../styles/Navbar.scss";
import { GoThreeBars } from "react-icons/go";
function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	return (
		<nav className="nav">
			<div className="nav-head">
				<p className="logo">Serenity.js</p>
				<button className="nav-toggle">
					<GoThreeBars />
				</button>
			</div>
			<div className="nav-center">
				<a href="">Home</a>
				<a href="">Documentation</a>
				<a href="">Contact Us</a>
			</div>
			<div className="nav-end">
				<a href="">Test API</a>
			</div>
		</nav>
	);
}

export default Navbar;
