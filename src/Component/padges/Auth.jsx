import React, { useEffect, useState } from "react";
import { requests, image_url } from "../API/Api";
import axios from "axios";

export default function Auth() {
  const [peoples, setPeoples] = useState([]);

  async function handlePeople() {
    const { data } = await axios.get(requests.fetchPeople);
    setPeoples(data.results);
  }
  useEffect(() => {
    handlePeople();
  }, []);
  return (
    <div>
      <div className="row py-2 ">
        {peoples.map((people) => (
          <div className="col-md-2" key={people.id}>
            <img
              className="img-thumbnail"
              src={image_url + people.profile_path}
              alt={people.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
