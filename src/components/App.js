import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isRemovePlacePopupOpen, setIsRemovePlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false });

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleRemovePlaceClick = () => setIsRemovePlacePopupOpen(true);
  const handleImageClick = (data) => setSelectedCard({ isOpen: true, ...data });

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsRemovePlacePopupOpen(false);
    setSelectedCard({ isOpen: false });
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onRemovePlace={handleRemovePlaceClick}
          onCardImage={handleImageClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="profile"
          title="Редактировать профиль"
          children={
            <>
              <input
                id="name-input"
                className="popup__field popup__field_value_name"
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__input-error name-input-error"></span>
              <input
                id="job-input"
                className="popup__field popup__field_value_job"
                type="text"
                name="job"
                placeholder="Профессиональная деятельность"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__input-error job-input-error"></span>
              <input
                className="popup__save-btn"
                type="submit"
                name="submit"
                value="Сохранить"
              />
            </>
          }
        />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="card"
          title="Новое место"
          children={
            <>
              <input
                id="card-name-input"
                className="popup__field popup__field_value_card-name"
                type="text"
                name="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__input-error card-name-input-error"></span>
              <input
                id="link-input"
                className="popup__field popup__field_value_card-link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error link-input-error"></span>
              <input
                className="popup__save-btn"
                type="submit"
                name="submit"
                value="Создать"
              />
            </>
          }
        />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          title="Обновить аватар"
          children={
            <>
              <input
                id="avatar-link"
                className="popup__field popup__field_avatar-link"
                type="url"
                name="link"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="popup__input-error avatar-link-error"></span>
              <input
                className="popup__save-btn"
                type="submit"
                name="submit"
                value="Сохранить"
              />
            </>
          }
        />
        <PopupWithForm
          isOpen={isRemovePlacePopupOpen}
          onClose={closeAllPopups}
          name="delete-confirm"
          title="Вы уверены?"
          children={
            <input
              className="popup__save-btn"
              type="submit"
              name="submit"
              value="Да"
            />
          }
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
};

export default App;
