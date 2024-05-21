import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './preview.css';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Preview = () => {
    useEffect(() => {
        document.title = "The Hobbit Website - Preview";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/preview", title: "The Hobbit - Preview Page" });
        sessionStorage.setItem('currentPage', '5');
    }, []);

	return (
        <>
            <Header />
            <Navmenu />
            <Footer />  
        </>
    );
}
export default Preview;