import { useEffect, useState } from "react";
import Card from "./Card";
import api from "../utils/api";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardImage }) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([user, initialCards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(initialCards);
      })
      .catch((err) => console.error(`Что-то пошло не так: (${err})`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-btn"
          type="button"
          aria-label="Редактировать"
          onClick={onEditAvatar}
        >
          <img className="profile__avatar-img" src={userAvatar} alt="Ава" />
        </button>
        <div className="profile__info">
          <button
            className="profile__edit-btn"
            type="button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          ></button>
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Галерея">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardImage={onCardImage} />
        ))}
      </section>
    </main>
  );
};

export default Main;
