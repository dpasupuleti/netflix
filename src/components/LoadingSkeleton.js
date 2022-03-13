import React from "react";
import "./LoadingSkeleton.css";
const LoadingSkeleton = (props) => {
	let counter = Math.floor(window.innerWidth / 100 / 2);
	const classes = `skeleton ${props.type}`;
	let temp;
	for (let i = 1; i <= counter; i++) {
		return (temp += i);
	}
	if (props.type === "thumbnail")
		return Array(counter).fill(<div key={temp} className={classes}></div>);
};

export default LoadingSkeleton;
