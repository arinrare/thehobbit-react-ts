import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './halloffame.css';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const ring = require('../../images/halloffame/ring.png');

const Halloffame = () => {
    useEffect(() => {
        document.title = "The Hobbit Website - Hall of Fame";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/halloffame", title: "The Hobbit - Hall of Fame Page" });
        sessionStorage.setItem('currentPage', '6');
    }, []);

	return (
        <>
            <Header />
            <Navmenu />
            <div className="contentColumn">
				<div className="halloffame">			
				    <img className="ring grow" src={ring} alt="The One Ring" />
                </div>
            </div>
            <Footer />    
        </>
    );
}
export default Halloffame;