import { Link } from "react-router-dom";

function APICard({ name, path, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={path}>Try</Link>
    </div>
  );
}

export default APICard;
