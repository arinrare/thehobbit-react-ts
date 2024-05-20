import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './registration.css';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Registration = () => {
    useEffect(() => {
        document.title = "The Hobbit Website - Registration";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/registration", title: "The Hobbit - Registration Page" });
      }, []);

	return (
        <>
            <Header />
            <Navmenu />
            <Footer />   
        </>
    );
}
export default Registration;