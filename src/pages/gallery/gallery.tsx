import React from 'react';
import ReactGA from 'react-ga4';
import './gallery.css';

const Gallery = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Gallery";
        ReactGA.send({ hitType: "pageview", page: "/gallery", title: "Gallery Page" });
    }, []);

	return (
        <>
           
        </>
    );
}
export default Gallery;