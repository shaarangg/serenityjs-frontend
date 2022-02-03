import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Dropdown from "../Dropdown/Dropdown";
import { IoIosCopy } from "react-icons/io";
import styles from "./CodeSnippet.module.scss";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
function CodeSnippet() {
	console.log();
	return (
		<div className={styles.container}>
			<div className={styles.code}>
				<div className={styles.menu}>
					<Dropdown />
					<IoIosCopy />
				</div>
				<SyntaxHighlighter
					language="javascript"
					style={themes.atomOneDark}
					className={styles.highlight}
				>
					var a = 5;
				</SyntaxHighlighter>
			</div>
		</div>
	);
}

export default CodeSnippet;
