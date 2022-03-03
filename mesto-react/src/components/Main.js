import React, { useEffect, useState } from 'react';
import editButton from '../images/edit-button.svg'
import plus from '../images/plus.svg'
import api from '../utils/Api';
import Card from './Card'

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick
   }) 
   {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
        .getProfileInfo()
        .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
            
        })
        .catch(err => console.log(`Ошибка при обновлении профиля: ${err}`))

    }, []);

    useEffect(() => {
        api
        .getInitialCards()
        .then((res) => {
            setCards(res)
            
        })
        .catch(err => console.log(`Ошибка при добавлении карточек: ${err}`))

    }, []);

    return (
        <main className="content">

        <section className="profile">
            <img className="profile__image" alt="фото" src={userAvatar} onClick={onEditAvatar}/>
            <div className="profile__info">
                <div className="profile__title-button">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                        <img alt="Редактировать" src={editButton}/>
                    </button>
                </div>
                <p className="profile__text">{userDescription}</p>
            </div>
            <button aria-label="Добавить" type="button" className="profile__add-button" onClick={onAddPlace}>
                <img className="profile__button-img" alt="добавить" src={plus}/>
            </button>
        </section>

        <section className="elements">
            { cards.map((card) => ( <Card card={card} onCardClick={onCardClick} key={`card${card._id}`}/>))}
        </section>

    </main>
    )
};

export default Main
