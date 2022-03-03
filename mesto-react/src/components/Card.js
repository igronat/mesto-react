import React from 'react';

function Card({card}) {

    return (
       
        <article className="element">
            <img alt={`фото ${card.name}`} className="element__image" src={card.link}/>
            <button type="button" className="element__trash"></button>
            <div className="element__description">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__likes">
                  <button type="button" className="element__heart"></button>
                  <p className="element__like">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )

};

export default Card;