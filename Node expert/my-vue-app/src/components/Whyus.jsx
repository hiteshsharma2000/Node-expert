import React from 'react'
import numberAni1 from '../assets/numberAni1.svg'
import numberAni2 from '../assets/numberAni2.svg'
import ReactPlayer from 'react-player/youtube'
const Whyus = () => {
  return (
    <div >
        <h2 style={{textAlign:"center"}}>Why Us</h2>
        <p style={{textAlign:"center"}} >At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success</p>
   <div style={{marginLeft:"5%",display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
    <div >
    <ReactPlayer  url='https://youtu.be/R2meHtrO1n8?si=Qfn6ralPqLuPFN9i' />
    </div>
    <div>
        <h2>Crafting Your Dream Career: Building a Path You Love with us</h2>
        <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
    <p>Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.</p>
    <button>get updates</button>
    </div>
   </div>
   <br />
   <br />
   <br />
   <br />
   <h2 style={{marginLeft:"10%",marginRight:"10%"}}>We Completed 1200+ Certification Program Successfully & Counting</h2>
   <p style={{marginLeft:"10%",marginRight:"10%"}}>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
   <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",marginLeft:"10%",color:"#1453FF"}}>
    <div style={{display:"flex"}}><img style={{width:"4em"}} src={numberAni2} alt="" /><div style={{paddingTop:"2.5em"}}>
        <h2>100+</h2>
    <p>Batch complete</p>
    </div></div>
    <div style={{display:"flex"}}><img style={{width:"4em"}} src={numberAni2} alt="" /><div style={{paddingTop:"2.5em"}}>
        <h2>50+</h2>
    <p>Active Batches</p>
    </div></div>
    <div style={{display:"flex"}}><img style={{width:"4em"}} src={numberAni2} alt="" /><div style={{paddingTop:"2.5em"}}>
        <h2>100+</h2>
    <p>Student Satisfied</p>
    </div></div>
    <div style={{display:"flex"}}><img style={{width:"4em"}} src={numberAni2} alt="" /><div style={{paddingTop:"2.5em"}}>
        <h2>10+</h2>
    <p>Course Modules</p>
    </div></div>
   
   </div>
   
    </div>
  )
}

export default Whyus