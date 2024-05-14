import React from 'react';
import ReactGA from 'react-ga4';
import './cast.css';
import Navmenu from '../../components/navmenu/navmenu';

const Cast = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Cast";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/cast", title: "The Hobbit - Cast Page" });
    }, []);

	return (
        <>
            <Navmenu />    
        </>
    );
}
export default Cast;