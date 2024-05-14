import React from 'react';
import ReactGA from 'react-ga4';
import './gallery.css';

const Gallery = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Gallery";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/gallery", title: "The Hobbit - Gallery Page" });
    }, []);

	return (
        <>
           
        </>
    );
}
export default Gallery;