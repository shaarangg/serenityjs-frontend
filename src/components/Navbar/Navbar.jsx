import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { GoThreeBars } from "react-icons/go";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	const navCenterContainer = useRef(null);
	const activeStyle = ({ isActive }) => {
		return {
			color: isActive ? "#f3a4cc" : "",
		};
	};
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
					<Link to="/" className="logo">
						Serenity.js
					</Link>
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
					<NavLink to="/" style={activeStyle}>
						Home
					</NavLink>
					<NavLink to="/docs" style={activeStyle}>
						Documentation
					</NavLink>
					<NavLink to="/contact" style={activeStyle}>
						Contact Us
					</NavLink>
					<Link to="/api" className="toggle-nav-end">
						Test Api
					</Link>
				</div>
				<div className="nav-end">
					<a href="/api">Test API</a>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
