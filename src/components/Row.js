import React, { useEffect, useState } from "react";
import axios from "../axios";
import LoadingSkeleton from "./LoadingSkeleton";
import classes from "./Row.module.css";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			try {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
				setIsLoading(false);
				return request;
			} catch (e) {}
		}
		fetchData();
		return () => setIsLoading(false);
	}, [fetchUrl]);
	return (
		<div className={classes.row}>
			<h2>{title}</h2>
			<div className={classes.row__posters}>
				{isLoading ? (
					<LoadingSkeleton type='thumbnail' />
				) : (
					movies.map(
						(movie) =>
							((isLargeRow && movie.poster_path) ||
								(!isLargeRow && movie.backdrop_path)) && (
								<img
									key={movie.id}
									className={`${classes.row__poster} ${
										isLargeRow && `${classes.row__posterLarge}`
									}`}
									src={`${base_url}${
										isLargeRow ? movie.poster_path : movie.backdrop_path
									}`}
									alt={movie.name}
								/>
							)
					)
				)}
			</div>
		</div>
	);
};

export default Row;
