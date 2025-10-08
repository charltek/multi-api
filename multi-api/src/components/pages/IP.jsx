import { fetchIP } from "../../api/IP";
import { useState, useEffect } from "react";

function IP() {
  const [ip, setIp] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchIP()
      .then((data) => setIp(data))
      .catch(() => setError("Failed to fetch IP."));
  }, []);

  return <div>{error ? <p>error</p> : <p>Your public IPv6 is : {ip}</p>}</div>;
}

export default IP;
