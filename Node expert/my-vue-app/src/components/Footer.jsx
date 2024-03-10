import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div>
        <br />
        <br />
        <br />
      
        <br />
 <div style={{border:"none",display:"flex",justifyContent:"space-around",backgroundColor:"#EFEFFE",padding:"4em"}}>
 <div>

    <div style={{display:"flex",paddingTop:"2em",justifyContent:"space-between"}}>
        
        <img style={{width:"2em",height:"2.5em"}} src={logo} alt="" />
        <h3>Learning exp.</h3>
    </div>
    <br />
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <i class='bx bxl-facebook-circle'></i>
    <i class='bx bxl-twitter' ></i>
    <i class='bx bxl-linkedin' ></i>
    <i class='bx bxl-pinterest-alt' ></i>
    </div>
 </div>
    
    <div><h5>Links</h5>
    <br />
    <p>Home</p>
    <p>Downlaod</p>
    <p>About</p>
    <p>Service</p>
    </div>
    <div><h5>Support</h5>
    <br />
    <p>FAQ</p>
    <p>How it</p>
    <p>Contact</p>
    <p>Reporting</p>
    </div>
    <div><h5>Contact Us</h5>
    <br />
    <p>+880 12345678</p>
    <p>supportedu@gmail.com</p>
    <p>Banglore.City</p>
    </div>

 </div>

    </div>
  )
}

export default Footer