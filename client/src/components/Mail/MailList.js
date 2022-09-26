import React from 'react'
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
    <h1 className="mailList">Win Win with us  Save time  Save money! </h1>
    <span className="mailDesc">
    Sign up , We send you all news ...
    </span>
    <div className="mailInputContainer">
     <input type="text" placeholder="Your Email"/>
     <button>Subscribe</button>   
    </div>
    </div>
  )
}

export default MailList