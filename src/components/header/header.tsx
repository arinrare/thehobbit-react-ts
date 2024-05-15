import React from 'react';
import './header.css';

const logo = require('../../images/header/logo.png');

const Header = () => {
    
    return (
        <>
            <div className = "header">
                <img className="logoHeader" src={logo} alt="Hobbit Logo"/>
                <noscript><p>WARNING!! This page uses Javascript for formatting. Please turn it on for your browser.</p></noscript>
            </div>
        </>
    );
}
export default Header;