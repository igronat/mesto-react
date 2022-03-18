import React, { useState, useEffect, useContext, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext'; 

export default function EditAvatarPopup ({
    isOpen, 
    onClose,
    onUpdateAvatar
}) {

    const avatar= useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
        avatar: avatar.current.value,
  });

    }

    return (
        <PopupWithForm
                title='Обновить аватар'
                name='avatar'
                children={
                    <>
                    <input id="avatarUrl" ref={avatar} type="url" className="popup__input popup__text popup__text_type_avatar" name="avatar" placeholder="Ссылка на новый аватар" required defaultValue=""/>
                    <span id="avatarUrl-error" className="error"></span>
                    </>
                }
                onClose={onClose}
                isOpen={isOpen}
                onUpdateAvatar={handleSubmit}
            
            /> 
    )
}