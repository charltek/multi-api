function PokeCard({ id, name, sprite, shinySprite }) {
  return (
    <div>
      <img src={sprite} />
      <img src={shinySprite} />
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
}

export default PokeCard;
