import React from 'react';
import './App.css';
import ReactGA from 'react-ga4';

const TrackingID = 'G-FKJK7PJ0VH';

function App() {

  React.useEffect(() => {
    document.title = "The Hobbit Website";
    ReactGA.initialize(TrackingID);
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Landing Page" });
  }, []);

  return (
    <>
    </>
  );
}

export default App;
