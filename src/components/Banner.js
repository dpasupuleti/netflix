import React, { useEffect, useState } from "react";
import axios from "../axios";
import classes from "./css_modules/Banner.module.css";
import requests from "../Requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let active = true;
    if (active) {
      const subscribe = async function () {
        if (active) {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
            ]
          );
          return request;
        }
      };
      subscribe();
    }
    return () => (active = false);
  }, []);
  // This is used from description in the banner to trim by 100 characters
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.banner__contents}>
        <h1 className={classes.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={`${classes.banner__button}  ${classes.myList}`}>
            My list
          </button>
        </div>
        <h1 className={classes.banner__description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={classes["banner--fadeBottom"]} />
    </header>
  );
};

export default Banner;
