import React from 'react';
import ReactGA from 'react-ga4';
import './cast.css';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Cast = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Cast";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/cast", title: "The Hobbit - Cast Page" });
    }, []);

	return (
        <>
            <Header />
            <Navmenu />
            <Footer /> 
        </>
    );
}
export default Cast;