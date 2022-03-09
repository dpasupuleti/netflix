import React from "react";
import "./Banner.css";
const Banner = () => {
	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	};

	return (
		<header
			className='banner'
			style={{
				backgroundSize: "cover",
				backgroundImage: "url('https://i.ibb.co/WKRBzbH/Banner2.jpg')",
				backgroundPosition: "center center",
			}}>
			<div className='banner__contents'>
				<h1 className='banner__title'>Movie Name</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>play</button>
					<button className='banner__button'>My list</button>
				</div>
				<h1 className='banner__description'>
					{truncate(
						`This is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`,
						100
					)}
				</h1>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	);
};

export default Banner;
