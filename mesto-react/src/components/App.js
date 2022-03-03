import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';
import '../index.css';

// const handleEditAvatarClick = document.querySelector('.profile__image')
// console.log(handleEditAvatarClick)
// handleEditAvatarClick.addEventListener('click', () => {
// document.getElementById('avatar').classList.add('popup_opened')
// })
// function handleEditAvatarClick() {
//     console.log('handleEditAvatarClick')
//     document.getElementById('avatar').classList.add('popup_opened')
// }
// function handleEditProfileClick() {
//     console.log('handleEditProfileClick')
//     document.getElementById('profile').classList.add('popup_opened')
// }
// function handleAddPlaceClick() {
//     console.log('handleAddPlaceClick')
//     document.getElementById('mesto').classList.add('popup_opened')
// }

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

    const handleEditAvatarClick = () => {
        console.log('handleEditAvatarClick')
        setEditAvatarPopupOpen(true);
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                setEditAvatarPopupOpen(false);
                }
        })
    };
    const handleEditProfileClick = () => {
        console.log(setEditProfilePopupOpen)
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

    const closeAllPopups = (evt) => {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        document.removeEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                setEditProfilePopupOpen(false);
                setAddPlacePopupOpen(false);
                setEditAvatarPopupOpen(false);
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

    <template className="template">
        <article className="element">
            <img alt="фото" className="element__image"/>
            <button type="button" className="element__trash"></button>
            <div className="element__description">
                <h2 className="element__title"></h2>
                <div className="element__likes">
                  <button type="button" className="element__heart"></button>
                  <p className="element__like">0</p>
                </div>
            </div>
        </article>
    </template>

    {/* <div className="popup" id="profile">
        <div className="popup__overlay" id="overlay__profile"></div>
        <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <form name="UpdateProfile" className="popup__form popup__profile"/>
                <h2 className="popup__title">Редактировать профиль</h2>
                <input id="name" type="text" className="popup__input popup__text popup__text_type_name" name="name" placeholder="Имя" required value="Жак-Ив Кусто" minlength="2" maxlength="40"/>
                <span id="name-error" className="error"></span>
                <input id="job" type="text" className="popup__input popup__text popup__text_type_job" name="job" placeholder="Профессия" required value="Исследователь океана" minlength="2" maxlength="200"/>
                <span id="job-error" className="error"></span>
                <button type="submit" className="popup__button button popup__button_type_save" id="button-save">Сохранить</button>
            
        </div>
    </div> */}

    {/* <div className="popup" id="mesto">
        <div className="popup__overlay" id="overlay__mesto"></div>
        <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <form name="UpdateMesto" className="popup__form popup__mesto"/>
                <h2 className="popup__title">Новое место</h2>
                <input id="nameMesto" type="text" className="popup__input popup__text popup__text_type_mesto" name="mesto" placeholder="Название" required value="" minlength="2" maxlength="30"/>
                <span id="nameMesto-error" className="error"></span>
                <input id="link" type="url" className="popup__input popup__text popup__text_type_link" name="link" placeholder="Ссылка на картинку" required value=""/>
                <span id="link-error" className="error"></span>
                <button type="submit" className="popup__button button popup__button_type_create" id="button-create" disabled>Создать</button>
            
        </div>
    </div> */}

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

    {/* <div className="popup" id="avatar">
        <div className="popup__overlay" id="overlay__avatar"></div>
        <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <form name="UpdateAvatar" className="popup__form popup__profile">
                <h2 className="popup__title">Обновить аватар</h2>
                <input id="avatarUrl" type="url" className="popup__input popup__text popup__text_type_avatar" name="avatar" placeholder="Ссылка на новый аватар" required value=""/>
                <span id="avatarUrl-error" className="error"></span>
                <button type="submit" className="popup__button button popup__button_type_saveAvatar" id="button-saveAvatar" disabled>Сохранить</button>
            </form>
        </div>
    </div> */}

    <div className="popup overlay" id="img">
        <div className="popup__overlay" id="overlay__img"></div>
        <div className="popup__img">
            <button className="popup__close" type="button"></button>
            <form name="sizeImg" className="popup__form">
                <img alt="фото" className="popup__foto" src=""/>
                <h2 className="popup__fototext"></h2>
            </form>
        </div>
    </div>


        
        </>
    );
}

export default App;