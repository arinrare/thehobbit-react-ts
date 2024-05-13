import React from 'react';
import ReactGA from 'react-ga4';
import './registration.css';

const Registration = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Registration";
        ReactGA.send({ hitType: "pageview", page: "/registration", title: "The Hobbit - Registration Page" });
      }, []);

	return (
        <>
            
        </>
    );
}
export default Registration;