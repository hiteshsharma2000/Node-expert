import React from 'react'
import logo from '../assets/logo.png'
import banner from '../assets/banner.png'
const Navsection = () => {
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar"); // assuming your parent div has an id of "navbar"
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "black";
    } else {
      navbar.style.backgroundColor = "transparent"; // or any other color you want when not scrolled
    }
  });
  
  return (
    <div style={{ position: "static" ,color:"white"}}>
    <div style={{ width: "100%" }}>

      <img style={{ width: "100%"}} src={banner} alt="" />
    </div>
    <br />
    <div id="navbar" style={{ display: "flex", justifyContent: "space-around", position: "fixed", top: 0, width: "100%" ,padding:"1em",zIndex:"1000",scrollbarColor:"black"}}>
  <div style={{ display: "flex" }}>
    <img src={logo} style={{ width: "50px" }} alt="" />&nbsp;&nbsp;&nbsp;<h2>Learning exp.</h2>
  </div>
  <div id="navcomponent" style={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }}>
    <p>Home</p>
    <p>Services</p>
    <p>Why Us</p>
    <p>Our Goal</p>
    <button>Contact us</button>
  </div>
</div>

  </div>
     
  )
}

export default Navsection