import PokeCard from "../cards/PokeCard";
import { fetchAllPokemon, fetchPokemon } from "../../api/fetchPokemon";
import { useState, useEffect } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllPokemon()
      .then((res) => {
        const promises = res.map((pokemon) => fetchPokemon(pokemon.url));
        return Promise.all(promises);
      })
      .then((list) => setPokemon(list))
      .catch(() => setError("Failed to fetch pokemon"));
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        pokemon.map((p) => (
          <PokeCard
            key={p.id}
            id={p.id}
            name={p.name}
            sprite={p.sprites.front_default}
            shinySprite={p.sprites.front_shiny}
          />
        ))
      )}
    </div>
  );
}

export default Pokemon;
