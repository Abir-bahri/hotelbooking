
import React from "react";
import "./HomeMiddle.css";
import Featured from "../components/featured/Featured";
import PropertyList from"../components/propertyList/PropertyList";
import Footer from"../components/footer/Footer";
import MailList from"../components/Mail/MailList";


const HomeMiddle = () => {
  return (
    <div>
     <div  className="back">
      <div
      className="HomeMiddleContainer">
       <h1 className="HomeMiddleTitle"> Best Hotels Sousse</h1>
       <Featured/>
       <h1 className="HomeMiddleTitle"> Best Hotels Tabarka</h1>
       <PropertyList/>
       </div>
       </div>
       <MailList/>
       <Footer/>

      
      </div>
      

        
  )
}

export default HomeMiddle