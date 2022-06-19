const Card = ({ card, onCardImage }) => {
  const handleImageClick = () => onCardImage(card);

  return (
    <article className="card">
      <img
        onClick={handleImageClick}
        className="card__img"
        src={card.link}
        alt={card.name}
      />
      <button
        className="card__delete-btn"
        type="button"
        aria-label="Удалить"
      ></button>
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-grp">
          <button
            className="card__like-btn"
            type="button"
            aria-label="Мне это любо"
          ></button>
          <span className="card__like-counter">0</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
