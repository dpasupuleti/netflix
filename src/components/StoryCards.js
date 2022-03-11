import React from "react";
import storyCardTv from "../assets/storycards/tv.png";
import videoTv from "../assets/storycards/videoTv.m4v";
import videoMac from "../assets/storycards/videoMac.m4v";
import netflixmobile from "../assets/storycards/netflixmobile.jpg";
import MacTv from "../assets/storycards/macTv.png";
import kidsImg from "../assets/storycards/kids.png";
import classes from "./StoryCard.module.css";

const StoryCards = () => {
	const storyCards = [
		{
			h1: "Enjoy on your TV.",
			h2: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
			img: storyCardTv,
			video: videoTv,
			width: "466",
			height: "298",
			style: {
				position: "absolute",
				objectFit: "contain",
				top: "81px",
				right: "90px",
				zIndex: 1,
			},
		},
		{
			h1: "Download your shows to watch offline.",
			h2: "Save your favorites easily and always have something to watch.",
			img: netflixmobile,
			flex: true,
		},
		{
			h1: "Watch everywhere.",
			h2: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
			img: MacTv,
			video: videoMac,
			width: "390",
			height: "298",
			style: {
				position: "absolute",
				objectFit: "contain",
				top: "10px",
				right: "130px",
				zIndex: 1,
			},
		},
		{
			h1: "Create profiles for kids.",
			h2: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
			img: kidsImg,
			flex: true,
		},
	];

	const storyCardsLIst = storyCards.map((storyCard) => {
		return (
			<div
				key={storyCard.h1}
				className={classes.loginScreen__storyCard}
				style={
					storyCard.flex && {
						flexDirection: "row-reverse",
					}
				}>
				<div>
					<h1>{storyCard.h1}</h1>
					<h2>{storyCard.h2}</h2>
				</div>
				<div>
					<div style={{ position: "relative" }}>
						<div className={classes.imgClass}>
							<img
								className={classes.imgClass}
								style={{ zIndex: 4, position: "relative" }}
								src={storyCard.img}
								alt='video tv'
							/>
						</div>

						<video
							src={storyCard.video}
							width={storyCard.width}
							height={storyCard.height}
							style={storyCard.style}
							autoPlay='true'
							playsInline
							muted
							loop
						/>
					</div>
				</div>
			</div>
		);
	});
	return <React.Fragment>{storyCardsLIst}</React.Fragment>;
};

export default StoryCards;
