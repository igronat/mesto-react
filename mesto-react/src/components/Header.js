import React from 'react';
import logo from '../images/logomesto.svg'

function Header() {
    return (
        <header className="header">
            <img className="logo" alt="логотип" src={logo}/>
        </header>
    );
};

export default Header
