import React from 'react'
import layout from '../assets/layout.svg'
import Dashboard from '../assets/Dashboard.svg'
import smartphone from '../assets/smartphone.svg'
const Review = () => {
  return (
    <div style={{ width: "100%" }}>
    <div style={{ textAlign: "center", alignItems: "center", margin: "auto" }}>
      <h2>We provide various kinds of learning modules for you</h2>
    </div>
    <p style={{ display: "flex", justifyContent: "center" }}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem </p>
    <div id="animation1" style={{ display: 'grid', gridTemplateColumns: "repeat(3,1fr)", gap: "10%",marginLeft:"10%",marginRight:"10%" }}>
      <div style={{boxShadow:" rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",display:"flex",flexDirection:"column",borderRadius:"7px",placeItems:"center",padding:"1em"}}>
        <img style={{  width: "55%" ,padding:"1em" }} src={layout} alt="" />
        <h2>Learn Anything</h2>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>
      </div>
      <div style={{boxShadow:" rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",display:"flex",backgroundColor:"#FAF8E4",flexDirection:"column",borderRadius:"7px",placeItems:"center",padding:"1em"}}>
        <img style={{ width: "55%" ,padding:"1em"}} src={Dashboard} alt="" />
        <h2>Learn Anything</h2>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>
      </div>
      <div style={{boxShadow:" rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",display:"flex",flexDirection:"column",borderRadius:"7px",placeItems:"center",padding:"1em"}}>
        <img style={{  width: "55%" ,padding:"1em" }} src={smartphone} alt="" />
        <h2>Learn Anything</h2>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>
      </div>
    </div>
  </div>
  
  )
}

export default Review