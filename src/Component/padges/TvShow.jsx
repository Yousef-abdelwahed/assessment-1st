import axios from "axios";
import React, { useEffect, useState } from "react";
import { image_url, requests } from "../API/Api";

export default function TvShow() {
  const [tvShows, setTvShow] = useState([]);
  async function handleTvShow() {
    const { data } = await axios.get(requests.fetchTvShow);
    setTvShow(data.results);
  }
  useEffect(() => {
    handleTvShow();
  }, []);
  return (
    <div className="row py-2">
      {tvShows.map((tvShow) => (
        <div className="col-md-2" key={tvShow.id}>
          <img className="w-100" src={image_url + tvShow.poster_path} alt="" />
          <h5>{tvShow.name}</h5>
        </div>
      ))}
    </div>
  );
}
