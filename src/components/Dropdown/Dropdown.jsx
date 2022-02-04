import React, { useEffect, useState, useRef } from "react";
import styles from "./Dropdown.module.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";
function Dropdown(props) {
	const [down, setDown] = useState(false);
	const dropListRef = useRef(null);
	const { index, setIndex, languages } = props;
	const { value } = languages[index];

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
				onBlur={() => {
					setDown(false);
				}}
				onClick={() => {
					setDown(!down);
				}}
			>
				<p>Request Sample: {value}</p>
				<MdOutlineArrowDropDown />
			</button>
			<div className={styles.listContainer}>
				<div className={styles.list} ref={dropListRef}>
					{languages.map((language, idx) => {
						const { lang } = language;
						return (
							<div
								key={idx}
								onMouseDown={() => {
									setIndex(idx);
									setDown(false);
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
