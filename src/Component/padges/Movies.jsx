import React, { useEffect, useState } from "react";
import { image_url, requests } from "../API/Api";
import axios from "axios";
import Spinner from "./Spinner";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  async function handleMovies() {
    const { data } = await axios.get(requests.fetchMovie);
    setMovies(data.results);
  }
  useEffect(() => handleMovies, []);
  return (
    <div className="row py-2 ">
      {movies.length > 0 ? (
        movies.map((movie) => {
          return (
            <div className="col-md-2" key={movie.id}>
              {console.log(movie)}
              <img
                className="w-100"
                src={image_url + movie.poster_path}
                alt={movie.title}
              />
              <h4>{movie.title}</h4>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}
