import React, { useEffect, useState, useRef } from "react";
import languages from "../../data";
import styles from "./Dropdown.module.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";
function Dropdown() {
	const [down, setDown] = useState(false);
	const dropListRef = useRef(null);
	const [dispLang, setDispLang] = useState("javascript");

	useEffect(() => {
		if (down) {
			dropListRef.current.style.display = "block";
		} else {
			dropListRef.current.style.display = "none";
		}
	}, [down]);

	return (
		<div className={styles.container}>
			<button
				className={styles.head}
				onClick={() => {
					setDown(!down);
				}}
			>
				<p>Request Sample: {dispLang}</p>
				<MdOutlineArrowDropDown />
			</button>
			<div className={styles.listContainer}>
				<div className={styles.list} ref={dropListRef}>
					{languages.map((language, index) => {
						const { lang, value } = language;
						return (
							<div
								key={index}
								onClick={() => {
									setDispLang(value);
								}}
							>
								{lang}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Dropdown;
