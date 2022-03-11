import React from "react";
import "./LoadingSkeleton.css";
const LoadingSkeleton = (props) => {
	let counter = Math.floor(window.innerWidth / 100 / 2);

	// let counter = 16;
	console.log(window.innerWidth, Math.floor(counter));
	const classes = `skeleton ${props.type}`;
	// console.log("hello");
	if (props.type === "thumbnail")
		return Array(counter).fill(<div className={classes}></div>);
};

export default LoadingSkeleton;
