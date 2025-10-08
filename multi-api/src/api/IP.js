import axios from "axios";

export function fetchIP() {
  return axios
    .get("http://icanhazip.com")
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching IP: ", error);
      throw error;
    });
}
