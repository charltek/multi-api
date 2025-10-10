import SWCard from "../cards/StarwarsCard";
import { fetchSW } from "../../api/fetchSW";
import { useState, useEffect } from "react";

function Starwars() {
  const [SW, setSW] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSW()
      .then((res) => {
        setSW(res);
      })
      .catch(() => setError("Failed to fetch SW"));
  }, []);
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        SW.map((char) => (
          <SWCard
            name={char.name}
            height={char.height}
            mass={char.mass}
            hair_color={char.hair_color}
            skin_color={char.skin_color}
            eye_color={char.eye_color}
            birth_year={char.birth_year}
            gender={char.gender}
          />
        ))
      )}
    </div>
  );
}

export default Starwars;
