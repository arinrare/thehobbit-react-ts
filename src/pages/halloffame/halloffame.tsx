import React from 'react';
import ReactGA from 'react-ga4';
import './halloffame.css';
import Navmenu from '../../components/navmenu/navmenu';

const Halloffame = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Hall of Fame";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/halloffame", title: "The Hobbit - Hall of Fame Page" });
    }, []);

	return (
        <>
            <Navmenu />    
        </>
    );
}
export default Halloffame;