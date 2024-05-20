import React from 'react';
import { Link } from 'react-router-dom';
import './navmenu.css';

const homeButton = require('../../images/navmenu/homebutton.png');
const castButton = require('../../images/navmenu/castbutton.png');
const galleryButton = require('../../images/navmenu/imagesbutton.png');
const registrationButton = require('../../images/navmenu/registrationbutton.png');
const shoppingButton = require('../../images/navmenu/shoppingbutton.png');
const previewButton = require('../../images/navmenu/previewbutton.png');
const halloffameButton = require('../../images/navmenu/halloffamebutton.png');

const Navmenu = () => {
    
    if (sessionStorage.getItem('currentPage') === null) {
        handleClick('0');
    }
	   
    function handleClick(ID: string) {
            sessionStorage.setItem('currentPage', ID);
    } 


    
    return (
        <>
            <div className={"pageColumn navmenuColumn " + (sessionStorage.getItem('currentPage') === '2' ? 'navmenuColumnGallery' : '')}>
                <Link onClick={() => handleClick('0')} className={sessionStorage.getItem('currentPage') === '0' ? 'navmenuButton active' : 'navmenuButton'} to='/'><img className="navmenuImage" src={homeButton} alt="Home Button" /></Link>
                <Link onClick={() => handleClick('1')} className={sessionStorage.getItem('currentPage') === '0' ? 'navmenuButton active' : 'navmenuButton'} to='/cast'><img className="navmenuImage" src={castButton} alt="Cast Button" /></Link>
                <Link onClick={() => handleClick('2')} className={sessionStorage.getItem('currentPage') === '0' ? 'navmenuButton active' : 'navmenuButton'} to='/gallery'><img className="navmenuImage" src={galleryButton} alt="Gallery Button" /></Link>
                <Link onClick={() => handleClick('3')} className={sessionStorage.getItem('currentPage') === '0' ? 'navmenuButton active' : 'navmenuButton'} to='/registration'><img className="navmenuImage" src={registrationButton} alt="Registration Button" /></Link>
                <Link onClick={() => handleClick('4')} className={sessionStorage.getItem('currentPage') === '0' ? 'navmenuButton active' : 'navmenuButton'} to='/shopping'><img className="navmenuImage" src={shoppingButton} alt="Shopping Button" /></Link>
                <Link onClick={() => handleClick('5')} className={sessionStorage.getItem('currentPage') === '0' ? 'navmenuButton active' : 'navmenuButton'} to='/preview'><img className="navmenuImage" src={previewButton} alt="Preview Button" /></Link>
                <Link onClick={() => handleClick('6')} className={sessionStorage.getItem('currentPage') === '0' ? 'navmenuButton active' : 'navmenuButton'} to='/halloffame'><img className="navmenuImage" src={halloffameButton} alt="Hall of Fame Button" /></Link>      
            </div>     
        </>
    );
}
export default Navmenu;

