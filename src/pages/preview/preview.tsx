import React from 'react';
import ReactGA from 'react-ga4';
import './preview.css';
import Navmenu from '../../components/navmenu/navmenu';

const Preview = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Preview";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/preview", title: "The Hobbit - Preview Page" });
      }, []);

	return (
        <>
            <Navmenu />     
        </>
    );
}
export default Preview;