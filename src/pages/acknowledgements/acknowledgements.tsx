import React from 'react';
import ReactGA from 'react-ga4';
import './acknowledgements.css';
import Navmenu from '../../components/navmenu/navmenu';

const Acknowledgements = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Acknowledgements";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/acknowledgements", title: "The Hobbit - Acknowledgements Page" });
    }, []);
    

	return (
        <>
            <Navmenu />    
        </>
    );
}
export default Acknowledgements;