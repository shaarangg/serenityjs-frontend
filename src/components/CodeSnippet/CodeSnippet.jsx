import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./CodeSnippet.module.scss";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import languages from "../../data";
function CodeSnippet() {
	const [index, setIndex] = useState(0);
	const { value, code } = languages[index];
	const resp = `{
	data: '"Normal Comment"
	status: 200
	headers: {content-type: 'text/html; charset=utf-8'}
	statusText: ""
}`;
	return (
		<div className={styles.container}>
			<div className={styles.code}>
				<div className={styles.menu}>
					<Dropdown index={index} setIndex={setIndex} languages={languages} />
				</div>
				<SyntaxHighlighter language={value} style={themes.nightOwl} className={styles.highlight}>
					{code}
				</SyntaxHighlighter>
			</div>
			<div className={styles.resp}>
				<div className={styles.menu}>Response Sample</div>
				<SyntaxHighlighter language="json" style={themes.nightOwl} className={styles.highlight}>
					{resp}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}

export default CodeSnippet;
