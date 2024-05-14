import React from 'react';
import ReactGA from 'react-ga4';
import './acknowledgements.css';

const Acknowledgements = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Acknowledgements";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/acknowledgements", title: "The Hobbit - Acknowledgements Page" });
    }, []);
    

	return (
        <>
            
        </>
    );
}
export default Acknowledgements;