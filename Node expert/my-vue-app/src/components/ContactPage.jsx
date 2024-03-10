import React from 'react'

const Contactus = () => {
  return (
    <div style={{position:"absolute",backgroundColor:"#333697",width:"60%",margin:"auto",padding:"1em 2em",display:"flex",justifyContent:"space-around",borderRadius:"13px",border:"none"}}>
        <div style={{color:"white"}}><h3 >Contact Us!</h3>
        <p>There are many variations of passages of Lorem Ipsum but the majority
           have suffered alteration.</p></div>
        <div>
          <br />
          <div style={{display:"flex",borderRadius:"55px",overflow:"hidden",backgroundColor:"white",padding:".3em"}}><input  type="email" name="" placeholder='Enter email' id="" ></input><button>Send</button></div>
        </div>
    </div>
  )
}

export default Contactus