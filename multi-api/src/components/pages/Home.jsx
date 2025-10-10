import APICard from "../cards/APICard";

const apis = [
  { name: "IP", path: "/ip", description: "Retrieve your IP address" },
  { name: "Pokemon", path: "/pokemon", description: "Get information on every pokemon" },
  { name: "Starwars", path: "/starwars", description: "Get information on Starwars" },
];

function Home() {
  return (
    <div>
      {apis.map((api) => (
        <APICard key={api.path} {...api} />
      ))}
    </div>
  );
}

export default Home;
