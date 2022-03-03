import React, { useState } from 'react';

export default function ImagePopup({card, onClose}) {

    return (
        <div className={card ? `popup overlay popup_opened` : `popup overlay`} id="img">
        <div className="popup__overlay" id="overlay__img" onClick={onClose}></div>
        <div className="popup__img">
            <button className="popup__close" type="button" onClick={onClose}></button>
            <form name="sizeImg" className="popup__form">
                <img alt="фото" className="popup__foto" src={card.link}/>
                <h2 className="popup__fototext">{card.name}</h2>
            </form>
        </div>
    </div>
    
)

    // constructor(selector) {
    //     super(selector); //  вызываем конструктор родителя

    //     this._name = this._popup.querySelector('.popup__fototext');
    //     this._link = this._popup.querySelector('.popup__foto');

    // }

    // open({ name, link }) { //функция открытия окна popup
    //     super.open();

    //     this._link.src = link;
    //     this._name.textContent = name;
    //     this._link.alt = `Фото ${name}`;

    // }

}