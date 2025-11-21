import axios from "axios";

export function fetchAllPokemon() {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((res) => res.data.results)
    .catch((error) => {
      console.error("Error fetching Pokémon list:", error);
      throw error;
    });
}

export function fetchPokemon(url) {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching Pokemon:", error);
      throw error;
    });
}
