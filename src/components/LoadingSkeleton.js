import React from "react";
import "./css_modules/LoadingSkeleton.css";
const LoadingSkeleton = (props) => {
  let counter = Math.floor(window.innerWidth / 100 / 2);
  const classes = `skeleton ${props.type}`;
  if (props.type === "thumbnail")
    return Array(counter).fill(<div className={classes}></div>);
};

export default LoadingSkeleton;
