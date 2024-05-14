import React from 'react';
import ReactGA from 'react-ga4';
import './home.css';

import Navmenu from '../../components/navmenu/navmenu'; 

const Home = () => {
  React.useEffect(() => {
    document.title = "The Hobbit Website - Home";
    ReactGA.send({ hitType: "pageview", page: "/thehobbit/home", title: "The Hobbit - Home Page" });
  }, []);	
  
  return (
    <>
        <Navmenu />         
		</>
  );
}
export default Home;