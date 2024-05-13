import React from 'react';
import ReactGA from 'react-ga4';
import './preview.css';

const Preview = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Preview";
        ReactGA.send({ hitType: "pageview", page: "/preview", title: "Preview Page" });
      }, []);

	return (
        <>
           
        </>
    );
}
export default Preview;