import React from 'react'
import './featured.css'
import img from "./img.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"



const Featured = () => {
  return (
    <div className="featured">

    <div className="featuredItem">
    <img src={img} alt="Paradis Palace" 
     className="featuredImg"       /> 
    <div className="featuredTitles">
    <h1>Paradis Palace </h1>
    <h2>Hammamet ****</h2>
    </div>
    </div>

    <div className="featuredItem">
    <img 
    src={img2} alt="" 
    className="featuredImg"/>
    <div className="featuredTitles">
    <h1>Sentido Belle Park </h1>
    <h2>Sousse *****</h2>
    </div>
    </div>
    
    <div className="featuredItem">  
    <img 
     src={img3} 
     alt=""
     className="featuredImg"
     />
    <div className="featuredTitles">
    <h1>Le Sultan  </h1>
    <h2>Sousse ****</h2>
      </div>
     </div>
    </div>   
    
    
  )
}

export default Featured ;