import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import './home.css';

import Navmenu from '../../components/navmenu/navmenu'; 
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const gandalf = require('../../images/photos/gandalf.jpg');

const Home = () => {
  React.useEffect(() => {
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
        <div className="contentColumn">
          <div onClick={handleRevealClick} className="reveal">Synopsis</div>
          <div className="hide">Close</div>
          <p className={reveal ? 'synopsis showSynopsis' : 'synopsis hideSynopsis'}>Bilbo, Gandalf, and the company of Dwarves led by Thorin Oakenshield,<br/>
                              resume their journey in the land of Middle Earth. First stop is the<br/>
                              house of Beorn, home to a mysterious shape changer. Gandalf splits from<br/>
                              the company before they enter the dark and dangerous Mirkwood Forest, home<br/>
                              to a particularly nasty breed of Giant Spider. Bilbo and the dwarves will<br/> 
                              need to muster all of their courage to survive this encounter. Aided by the<br/>
                              Wood Elves, the company makes its way towards the human town of Dale, where<br/>
                              they are greeted by Bard, a bowman and descendant of a Lord. Gathering supplies,<br/>
                              the companies' next stop is The Lonely Mountain itself, home to Smaug,<br/>
                              Dragon of myth and legend. Whilst events for the White Council, led by Gandalf<br/>
                              the Grey, are stirring in Dol Guldur, Bilbo and the company of dwarves must face<br/>
                              'The Desolation of Smaug'.<br/><span className="close" id="close"></span></p>
          <img className="frontPageImage" src = {gandalf} alt="Gandalf holding his staff" />
			  </div>
        <Footer />        
		</>
  );
}
export default Home;