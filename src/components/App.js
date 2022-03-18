import React, { useState, useEffect, createContext } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({name: '', about: ''});

    useEffect(() => {
        // const handleEscClose = (e) => {
        //   if (e.key === "Escape") {
        //     closeAllPopups();
        //   }
        // };
    
        // document.addEventListener("keydown", handleEscClose);
    
        // return () => document.removeEventListener("keydown", handleEscClose);

        api
        .getProfileInfo()
        .then((user) => {
            setCurrentUser(user);
            
        })
        .catch(err => console.log(`Ошибка профиля: ${err}`));
      }, []); 

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    };
    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
    }
    const handleAddPlaceClick= () => {
        setAddPlacePopupOpen(true);
    }
    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    const closeAllPopups = () => {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    const handleUpdateUser = (user) => {
        console.log('hgjh')
        api
        .editProfile(user)
        .then((res) => {
            setCurrentUser(res);
            setEditProfilePopupOpen(false)
        
        })
        .catch(err => console.log(`Ошибка профиля: ${err}`));
    };

    const handleUpdateAvatar = (user) => {
        api
        .avatarProfile(user)
        .then((res) => {
            setCurrentUser(res);
            
        })
        .catch(err => console.log(`Ошибка профиля: ${err}`));
    }


    return (  
        <>
        <CurrentUserContext.Provider value={currentUser}>
            <Header/>

            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />

            <Footer/>

            <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} 
            /> 

            {/* <PopupWithForm
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

            <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} 
            /> */}

            

            <ImagePopup 
                card = {selectedCard}
                onClose = {closeAllPopups}
            
            />
        </CurrentUserContext.Provider>
 
        </>
    );
}

export default App;