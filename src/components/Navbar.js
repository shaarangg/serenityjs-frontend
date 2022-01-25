import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.scss";
import { GoThreeBars } from "react-icons/go";
function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	const linkContainerRef = useRef(null);
	const linksRef = useRef(null);
	// useEffect(() => {
	// 	if (showLinks) {
	// 		const linkHeight = linksRef.current.getBoundingClientRect().height;
	// 		console.log(linkHeight);
	// 		linkContainerRef.current.style.height = `${linkHeight}px`;
	// 	} else {
	// 		linkContainerRef.current.style.height = "0px";
	// 	}
	// }, [showLinks]);
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav-head">
					<p className="logo">Serenity.js</p>
					<button
						className="nav-toggle"
						onClick={() => {
							setShowLinks(!showLinks);
						}}
					>
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
		</div>
	);
}

export default Navbar;
