import React, { useEffect, useState, useContext } from 'react';
import editButton from '../images/edit-button.svg'
import plus from '../images/plus.svg'
import api from '../utils/Api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick
   }) 
   {

    // const [userName, setUserName] = useState('');
    // const [userDescription, setUserDescription] = useState('');
    // const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        // api
        // .getProfileInfo()
        // .then((res) => {
        //     setUserName(res.name);
        //     setUserDescription(res.about);
        //     setUserAvatar(res.avatar);
            
        // })
        // .catch(err => console.log(`Ошибка при обновлении профиля: ${err}`));

        api
        .getInitialCards()
        .then((res) => {
            setCards(res)
            
        })
        .catch(err => console.log(`Ошибка при добавлении карточек: ${err}`))

    }, []);

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
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    } 

    return (
        <main className="content">

        <section className="profile">
            <img className="profile__image" alt="фото" src={currentUser?.avatar} onClick={onEditAvatar}/>
            <div className="profile__info">
                <div className="profile__title-button">
                    <h1 className="profile__title">{currentUser?.name}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                        <img alt="Редактировать" src={editButton}/>
                    </button>
                </div>
                <p className="profile__text">{currentUser?.about}</p>
            </div>
            <button aria-label="Добавить" type="button" className="profile__add-button" onClick={onAddPlace}>
                <img className="profile__button-img" alt="добавить" src={plus}/>
            </button>
        </section>

        <section className="elements">
            { cards.map((card) => ( <Card card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} key={`card${card._id}`}/>))}
        </section>

    </main>
    )
};

export default Main
