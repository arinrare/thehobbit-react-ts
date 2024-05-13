import React from 'react';
import ReactGA from 'react-ga4';
import './home.css';

const Home = () => {
  React.useEffect(() => {
    document.title = "The Hobbit Website - Home";
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home Page" });
  }, []);	
  
  return (

    <>
            
		</>
    );
}
export default Home;