import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import './home.css';

import Navmenu from '../../components/navmenu/navmenu'; 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Home = () => {
  useEffect(() => {
    document.title = "The Hobbit Website - Home";
    ReactGA.send({ hitType: "pageview", page: "/thehobbit/home", title: "The Hobbit - Home Page" });
  }, []);	

  const [reveal, setReveal] = useState(false);

  function handleRevealClick() {
    reveal ? setReveal(false) : setReveal(true);
  }

  
  return (
    <>
        <Header />
        <Navmenu />
        <div className="contentColumn contentColumnHome">
          <div onClick={handleRevealClick} className={reveal ? "reveal homeButtonHidden" : "reveal homeButtonVisible"}>Synopsis</div>
          <div onClick={handleRevealClick} className={reveal ? "hide homeButtonVisible" : "hide homeNuttonHidden"}>Close</div>
          <p className={reveal ? 'synopsis showSynopsis' : 'synopsis hideSynopsis'}>Bilbo, Gandalf, and the company of Dwarves led by Thorin Oakenshield, resume their journey in the land of Middle Earth. First stop is the house of Beorn, home to a mysterious shape changer. Gandalf splits from the company before they enter the dark and dangerous Mirkwood Forest, home to a particularly nasty breed of Giant Spider. Bilbo and the dwarves will need to muster all of their courage to survive this encounter. Aided by the Wood Elves, the company makes its way towards the human town of Dale, where they are greeted by Bard, a bowman and descendant of a Lord. Gathering supplies, the companies' next stop is The Lonely Mountain itself, home to Smaug, Dragon of myth and legend. Whilst events for the White Council, led by Gandalf the Grey, are stirring in Dol Guldur, Bilbo and the company of dwarves must face 'The Desolation of Smaug'.<span className="close" id="close"></span></p>
			  </div>
        <Footer />        
		</>
  );
}
export default Home;