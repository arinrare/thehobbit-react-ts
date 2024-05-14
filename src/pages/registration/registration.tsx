import React from 'react';
import ReactGA from 'react-ga4';
import './registration.css';
import Navmenu from '../../components/navmenu/navmenu';

const Registration = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Registration";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/registration", title: "The Hobbit - Registration Page" });
      }, []);

	return (
        <>
            <Navmenu />    
        </>
    );
}
export default Registration;