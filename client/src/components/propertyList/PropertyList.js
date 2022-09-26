import React from 'react'
import "./propertyList.css"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"
import img7 from "./img7.jpg"


const PropertyList = () => {
  return (
    <div className="PList">
      <div className="PListItem">
        <img src={img4} alt="" className="PlistImg" />
        <div className="PListTitles">
          <h1>Dar ismail ****</h1>
          <h1>Tabarka</h1>

        </div> 
      </div>
      <div className="PListItem">
        <img src={img5} alt="" className="PlistImg" />
        <div className="PListTitles">
          <h1>Itropica ****</h1>
          <h1>Tabaraka</h1>
          
        </div> 
      </div>

      <div className="PListItem">
        <img src={img6} alt="" className="PlistImg" />
        <div className="PListTitles">
          <h1>La cigale ***** Exellent</h1>
          <h1>Tabarka</h1>
          
        </div> 
      </div>

      <div className="PListItem">
        <img src={img7} alt="" className="PlistImg" />
        <div className="PListTitles">
        
          <h1>El Mouradi Bourguiba</h1>
          <h1>Tabarka</h1>
        
        </div> 
      </div>

      




    </div>
  )
}

export default PropertyList