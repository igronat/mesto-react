import React, { useState } from 'react';

export default function PopupWithForm({
    title,
    name,
    children,
    isOpen,
    onClose
}) {
    // constructor({ selector, handleCardSubmit }) {
    //     this._popup = document.getElementById(selector)
    //     this._handleCardSubmit = handleCardSubmit;
    //     this._formElement = this._popup.querySelector('.popup__form');
    //     this._inputList = this._formElement.querySelectorAll('.popup__input');
    //     this._submitButton = this._formElement.querySelector('.popup__button');
    //     this._initialText =  this._submitButton.textContent

    // }


    return (
        <div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`} id={name}>
        <div className="popup__overlay" id={`overlay__${name}`} onClick={onClose}></div>
        <div className="popup__content">
            <button className="popup__close" type="button" onClick={onClose}></button>
            <form name={name} className={`popup__form popup__${name}`}>
                <h2 className="popup__title">{title}</h2>
                {children}
                <button type="submit" className={`popup__button button popup__button_type_save${name}`} id={`button-save${name}`} disabled >Сохранить</button>
            </form>
        </div>
    </div>
    )

//     _getInputValues() { //ищем импуты
//         this._formValues = {};
//         this._inputList.forEach(input => {
//             this._formValues[input.name] = input.value;

//         });

//         return this._formValues;

//     }

//     _handleEscClose = (evt) => { //функция закрытия попапа через esc
//         if (evt.key === 'Escape') {
//             this.closePopup()
//         }

//     }

//     open() { //функция открытия окна popup
//         this._popup.classList.add('popup_opened');
//         document.addEventListener('keydown', this._handleEscClose);
//     }

//     closePopup() {
//         this._popup.classList.remove('popup_opened');
//         document.removeEventListener('keydown', this._handleEscClose);
//         this._formElement.reset();

//     }

//     renderLoading(isLoading, buttonText = 'Сохранение...') {
//     if (isLoading) {
//       this._submitButton.textContent = buttonText;
//     } else {
//       this._submitButton.textContent = this._initialText;
//     }
//   }

//     setEventListeners() {
//         const buttonClose = this._popup.querySelector('.popup__close');
//         const overlayClose = this._popup.querySelector('.popup__overlay');
//         buttonClose.addEventListener('click', () => this.closePopup());
//         overlayClose.addEventListener('click', () => this.closePopup());
//         this._formElement.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             this._handleCardSubmit(this._getInputValues());

//         })

//     }

}