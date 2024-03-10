import React from 'react'
import ReactPlayer from 'react-player/youtube'

const BannerContent = () => {
  return (
    <div style={{position:"absolute",color:"white",display:"flex",justifyContent:"space-evenly",width:"90%",marginLeft:"10%",gap:"20%",paddingTop:"10%"}}>
        
        <div>
            <h2>We Create Learning Experience With Excellent Technology.</h2>
            <p>Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— All Included In Your Subscription</p>
        <div style={{display:"flex",gap:"5%"}}><button>Book Demo Class</button>
        <p>Explore More </p></div>
        </div>
        <div>
        <ReactPlayer  url='https://youtu.be/R2meHtrO1n8?si=Qfn6ralPqLuPFN9i' />
          </div>
    </div>
  )
}

export default BannerContent