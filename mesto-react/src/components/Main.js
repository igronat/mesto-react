import React, { useEffect, useState } from 'react';
import avatar from '../images/avatar.jpg'
import editButton from '../images/edit-button.svg'
import plus from '../images/plus.svg'
import api from '../utils/Api';

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace
   }) 
   {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        api
        .getProfileInfo()
        .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
            
        })
        .catch(err => console.log(`Ошибка при обновлении профиля: ${err}`))

    }, [])

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
        </section>

    </main>
    )
};

export default Main
