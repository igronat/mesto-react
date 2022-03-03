import React, { useState } from 'react';

export default function ImagePopup() {

    return (
        <div className="popup overlay" id="img">
        <div className="popup__overlay" id="overlay__img"></div>
        <div className="popup__img">
            <button className="popup__close" type="button"></button>
            <form name="sizeImg" className="popup__form">
                <img alt="фото" className="popup__foto" src="<%=require('./images/dombai.jpg')%>"/>
                <h2 className="popup__fototext"></h2>
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