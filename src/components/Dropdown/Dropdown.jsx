import React, { useEffect, useState, useRef } from "react";
import languages from "../../data";
import styles from "./Dropdown.module.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";
function Dropdown() {
	const [down, setDown] = useState(false);
	const dropListRef = useRef(null);
	useEffect(() => {
		if (down) {
			dropListRef.current.style.display = "block";
		} else {
			dropListRef.current.style.display = "none";
		}
	}, [down]);
	return (
		<div className={styles.container}>
			<div
				className={styles.head}
				onClick={() => {
					setDown(!down);
				}}
			>
				<p>JavaScript</p>
				<MdOutlineArrowDropDown />
			</div>
			<div className={styles.list} ref={dropListRef}>
				{languages.map((language, index) => {
					const { lang, value } = language;
					return (
						<div key={index} id={value}>
							{lang}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Dropdown;
