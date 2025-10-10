import axios from "axios";

export function fetchSW() {
  return axios
    .get("https://swapi.dev/api/people")
    .then((res) => res.data.results)
    .catch((error) => {
      console.error("Error fetching SW,", error);
      throw error;
    });
}
