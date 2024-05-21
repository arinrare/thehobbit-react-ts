import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './shopping.css';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Shopping = () => {
    useEffect(() => {
        document.title = "The Hobbit Website - Shopping";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/shopping", title: "The Hobbit - Shopping Page" });
        sessionStorage.setItem('currentPage', '4');
    }, []);

	return (
        <>
            <Header />
            <Navmenu />
            <Footer />     
        </>
    );
}
export default Shopping;