import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Review from './components/Review';
import Navsection from './components/Navsection';
import Whyus from './components/Whyus';
import Ourstudents from './components/Ourstudents';
import Footer from './components/Footer';
import Contactus from './components/ContactPage';
import BannerContent from './components/BannerContent';


function App() {


  return (
    <>
   
    <BannerContent/>
<Navsection/>
<br />
<br />
<br />
 

  <Review/>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <Whyus/>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <Ourstudents/>
  <br />
  <br />
  <br />
  <br />
  <div style={{marginLeft:"20%"}}>
<Contactus/>
</div>
<Footer/>
    </>
  )
}

export default App
