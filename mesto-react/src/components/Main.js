import React from 'react';
import avatar from '../images/avatar.jpg'
import editButton from '../images/edit-button.svg'
import plus from '../images/plus.svg'

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace
   }) {
    return (
        <main className="content">

        <section className="profile">
            <img className="profile__image" alt="фото Кусто" src={avatar} onClick={onEditAvatar}/>
            <div className="profile__info">
                <div className="profile__title-button">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                        <img alt="Редактировать" src={editButton}/>
                    </button>
                </div>
                <p className="profile__text">Исследователь океана</p>
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
