import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false)

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                setEditAvatarPopupOpen(false);
                }
        })
    };
    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                setEditProfilePopupOpen(false);
                }
            })
    }
    const handleAddPlaceClick= () => {
        setAddPlacePopupOpen(true);
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                setAddPlacePopupOpen(false);
                }

        });
    }
    const handleCardClick = (card) => {
        setSelectedCard(card);
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                setSelectedCard(false);
                }

        });
    }

    const closeAllPopups = (evt) => {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard(false)
        document.removeEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                setEditProfilePopupOpen(false);
                setAddPlacePopupOpen(false);
                setEditAvatarPopupOpen(false);
                setSelectedCard(false)
                }
            })
    }


    return (  
        <>
            <Header/>

            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />

            <Footer/>

            <PopupWithForm
                title='Редактировать профиль'
                name='profile'
                children={
                    <>
                    <input id="name" type="text" className="popup__input popup__text popup__text_type_name" name="name" placeholder="Имя" required defaultValue="Жак-Ив Кусто" minLength="2" maxLength="40"/>
                    <span id="name-error" className="error"></span>
                    <input id="job" type="text" className="popup__input popup__text popup__text_type_job" name="job" placeholder="Профессия" required defaultValue="Исследователь океана" minLength="2" maxLength="200"/>
                    <span id="job-error" className="error"></span>
                    </>
                }
                onClose={closeAllPopups}
                isOpen={isEditProfilePopupOpen}
            
            />

            <PopupWithForm
                title='Новое место'
                name='mesto'
                children={
                    <>
                    <input id="nameMesto" type="text" className="popup__input popup__text popup__text_type_mesto" name="mesto" placeholder="Название" required defaultValue="" minLength="2" maxLength="30"/>
                    <span id="nameMesto-error" className="error"></span>
                    <input id="link" type="url" className="popup__input popup__text popup__text_type_link" name="link" placeholder="Ссылка на картинку" required defaultValue=""/>
                    <span id="link-error" className="error"></span>
                    </>
                }
                onClose={closeAllPopups}
                isOpen={isAddPlacePopupOpen}
            
            /> 

            <PopupWithForm
                title='Обновить аватар'
                name='avatar'
                children={
                    <>
                    <input id="avatarUrl" type="url" className="popup__input popup__text popup__text_type_avatar" name="avatar" placeholder="Ссылка на новый аватар" required defaultValue=""/>
                    <span id="avatarUrl-error" className="error"></span>
                    </>
                }
                onClose={closeAllPopups}
                isOpen={isEditAvatarPopupOpen}
            
            /> 

            <ImagePopup 
                card = {selectedCard}
                onClose = {closeAllPopups}
            
            />

    <div className="popup" id="delete">
        <div className="popup__overlay" id="overlay__delete"></div>
        <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <form name="DeleteCard" className="popup__form popup__delete">
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="button" className="popup__button button" id="button-delete">Да</button>
            </form>
        </div>
    </div>

    
        </>
    );
}

export default App;