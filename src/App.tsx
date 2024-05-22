import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga4';
import Home from './pages/home/home';
import Gallery from './pages/gallery/gallery';
import Registration from './pages/registration/registration';
import Shopping from './pages/shopping/shopping';
import Preview from './pages/preview/preview';
import Halloffame from './pages/halloffame/halloffame';
import Cast from './pages/cast/cast';
import Acknowledgements from './pages/acknowledgements/acknowledgements';


const TrackingID = 'G-FKJK7PJ0VH';

function App() {

  React.useEffect(() => {
    document.title = "The Hobbit Website";
    ReactGA.initialize(TrackingID);
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Landing Page" });
  }, []);

   // <BrowserRouter basename="/portfolio/thehobbit-react-ts"> ** Goes in the BrowserRouter tag above the Routes tag
  return (
    <>
      <BrowserRouter basename="/portfolio/thehobbit-react-ts">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cast' element={<Cast />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/halloffame' element={<Halloffame />} />
          <Route path='/acknowledgements' element={<Acknowledgements />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
