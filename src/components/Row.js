import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import axios from "../axios";
import LoadingSkeleton from "./LoadingSkeleton";
import classes from "./css_modules/Row.module.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTraielrUrl] = useState();

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

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTraielrUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTraielrUrl(urlParams.get("v"));
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className={classes.row}>
      <h2 style={{ paddingTop: "0.5rem" }}>{title}</h2>
      <div className={classes.row__posters}>
        {isLoading ? (
          <LoadingSkeleton type="thumbnail" />
        ) : (
          movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  key={movie.id}
                  onClick={() => handleClick(movie)}
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
      {trailerUrl && <Youtube videoId={trailerUrl} opts={options} />}
    </div>
  );
};

export default Row;
