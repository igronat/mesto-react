import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';


export function AddPlacePopup({
    isOpen, 
    onClose,
    onAddPlace
    }) {

        const [nameCard, setNameCard] = useState('');
        const [link, setLink] = useState('');
        
        function handleChange(e) {
            setNameCard(e.target.value);
        };
        
        function handleChangeLink(e) {
            setLink(e.target.value);
        };
        
        function handleSubmit(e) {
            // Запрещаем браузеру переходить по адресу формы
            e.preventDefault();
             
            // Передаём значения управляемых компонентов во внешний обработчик
            onAddPlace({
                name: nameCard,
                link,
            });

            setNameCard('');
            setLink('');
            e.target.reset();
               
        }; 

        return (
            <PopupWithForm
                title='Новое место'
                name='mesto'
                children={
                    <>
                    <input id="nameMesto" value={nameCard || ''} onChange={handleChange} type="text" className="popup__input popup__text popup__text_type_mesto" name="mesto" placeholder="Название" required minLength="2" maxLength="30"/>
                    <span id="nameMesto-error" className="error"></span>
                    <input id="link" type="url" value={link || ''} onChange={handleChangeLink} className="popup__input popup__text popup__text_type_link" name="link" placeholder="Ссылка на картинку" required/>
                    <span id="link-error" className="error"></span>
                    </>
                }
                onClose={onClose}
                isOpen={isOpen}
                onSubmit={handleSubmit}
            
            /> 
        )
    }
