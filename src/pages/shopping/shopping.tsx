import React from 'react';
import ReactGA from 'react-ga4';
import './shopping.css';

const Shopping = () => {
    React.useEffect(() => {
        document.title = "The Hobbit Website - Shopping";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/shopping", title: "The Hobbit - Shopping Page" });
      }, []);

	return (
        <>
            
        </>
    );
}
export default Shopping;