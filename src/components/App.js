import { useState } from "react";
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
          name="profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
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
        </PopupWithForm>
        <PopupWithForm
          name="card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
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
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            id="avatar-link"
            className="popup__field popup__field_avatar-link"
            type="url"
            name="link"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="popup__input-error avatar-link-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="delete-confirm"
          title="Вы уверены?"
          isOpen={isRemovePlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Да"
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
};

export default App;
