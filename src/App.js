import React from 'react';
import {useEffect} from 'react';
import Home from './Home';
import coimbatoreAirport from './CoimbatoreAirport';
import chennaiAirport from './ChennaiAirport';
import Lounge from './Lounge';
import agartalaAirport from './AgartalaAirport';
import Transport from './Transport';
import Aboutus from './Aboutus';
import {Routes,Route,useLocation} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar';
import Contact from './Contact';
import Restaurant from './Restaurant';
import Faq from './Faq';
import './App.css';
import Footer from './Footer';
import Airlines from './Airlines';
import Hotels from './Hotels';


function App() {
  const {pathname} = useLocation(); 
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [pathname]);
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={Aboutus}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/coimbatoreAirport' Component={coimbatoreAirport}/>
      <Route path='/agartalaAirport' Component={agartalaAirport}/>
      <Route path='/chennaiAirport' Component={chennaiAirport}/>
      <Route path='/lounge' Component={Lounge}/>
      <Route path='/transport' Component={Transport}/>
      <Route path='/restaurant' Component={Restaurant}/>
      <Route path='/faq' Component={Faq}/>
      <Route path='/airlines' Component={Airlines}/>
      <Route path='/hotels' Component={Hotels}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
