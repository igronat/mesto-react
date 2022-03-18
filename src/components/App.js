import React, { useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {EditProfilePopup} from './EditProfilePopup';
import {EditAvatarPopup} from './EditAvatarPopup';
import {AddPlacePopup} from './AddPlacePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({name: '', about: ''});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
        .getProfileInfo()
        .then((user) => {
            setCurrentUser(user);
            
        })
        .catch(err => console.log(`Ошибка профиля: ${err}`));

        api
        .getInitialCards()
        .then((res) => {
            setCards(res)
            
        })
        .catch(err => console.log(`Ошибка при добавлении карточек: ${err}`))
    }, []); 

    useEffect(() => {
        const handleEscClose = (e) => {
          if (e.key === "Escape") {
            closeAllPopups();
          }
        };
    
        document.addEventListener("keydown", handleEscClose);
    
        return () => document.removeEventListener("keydown", handleEscClose);

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
        api
        .editProfile(user)
        .then(res => {
            setCurrentUser(res);
            setEditProfilePopupOpen(false);
        
        })
        .catch(err => console.log(`Ошибка обновления профиля: ${err}`));
    };

    const handleUpdateAvatar = (user) => {
        api
        .avatarProfile(user)
        .then((res) => {
            setCurrentUser(res);
            setEditAvatarPopupOpen(false);
        })
        .catch(err => console.log(`Ошибка аватара: ${err}`));
    };

    const handleAddPlaceSubmit = (user) => {
        api
        .addCard(user)
        .then((res) => {
            setAddPlacePopupOpen(false);
            setCards([res, ...cards]);
        })
        .catch(err => console.log(`Ошибка аватара: ${err}`));
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api
        .changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    };
    
    function handleCardDelete(card) {
        // Снова проверяем, являемся ли мы владельцем текущей карточки
        const isOwn = card.owner._id === currentUser._id;
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api
        .deleteCard(card._id, !isOwn)
        .then(() => {
            setCards((state) => state.filter((c) => c._id != card._id ));

        });
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
                cards={cards}
                onCardsLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />

            <Footer/>

            <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} 
            /> 

            <AddPlacePopup 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit} 
            />

            <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} 
            />

            <ImagePopup 
                card = {selectedCard}
                onClose = {closeAllPopups}
            
            />
        </CurrentUserContext.Provider>
 
        </>
    );
}

export default App;