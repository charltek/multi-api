function SWCard({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }) {
  return (
    <div>
      <p>{name}</p>
      <p>{gender}</p>
      <p>
        {height} ---- {mass}
      </p>
      <p>{hair_color}</p>
      <p>{skin_color}</p>
      <p>{eye_color}</p>
      <p>{birth_year}</p>
    </div>
  );
}

export default SWCard;
