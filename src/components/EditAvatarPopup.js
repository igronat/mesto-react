import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export function EditAvatarPopup ({
    isOpen, 
    onClose,
    onUpdateAvatar
}) {

    const refAvatar = useRef();

    useEffect(() => {
        refAvatar.current.value = ''; 
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
        avatar: refAvatar.current.value,
        });

    };

    return (
        <PopupWithForm
                title='Обновить аватар'
                name='avatar'
                children={
                    <>
                    <input id="avatarUrl" ref={refAvatar} type="url" className="popup__input popup__text popup__text_type_avatar" name="avatar" placeholder="Ссылка на новый аватар" required/>
                    <span id="avatarUrl-error" className="error"></span>
                    </>
                }
                onClose={onClose}
                isOpen={isOpen}
                onSubmit={handleSubmit}
            
            /> 
    )
}