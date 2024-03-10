import React from 'react'
import person from '../assets/person.png'
import star from '../assets/star.svg'
const Ourstudents = () => {
  return (
    <div style={{textAlign:"start"}}>
        <h2 style={{fontSize:"1.9em",marginLeft:"12%",fontWeight:"500"}}>
        Our Students Feedback
        </h2>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You <br/>
                To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
            <button style={{color:"black",backgroundColor:"white",borderRadius:"5px"}}>Read more</button>
        </div>
        <div style={{border:"none",backgroundColor:"#EFEFFE",marginLeft:"10%",marginRight:"10%",display:"flex"}}>
 <img style={{width:"30%"}} src={person} alt="" />
 <div style={{padding:"7% 10%"}}><div style={{display:"flex"}}>
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star} alt="" />
 </div> 
 <br />
 <h5>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."</h5>
 <br />
 <br />
 <h4>Riad Isalm</h4>
 <h5>Product Manager. <a href="">@Learning.Com </a> </h5>
 </div>
        </div>
        </div>
  )
}

export default Ourstudents