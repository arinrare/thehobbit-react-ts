import React from 'react';
import ReactGA from 'react-ga4';
import './cast.css';

const Cast = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Cast";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/cast", title: "The Hobbit - Cast Page" });
    }, []);

	return (
        <>
            
        </>
    );
}
export default Cast;