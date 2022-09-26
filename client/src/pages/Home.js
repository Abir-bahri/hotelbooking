import React from 'react'
import { faCoffee,faBed,faPlane,faCar,faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Home.css"
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { Link,useNavigate } from 'react-router-dom';


const Home = () => {

  const [destination,setDestination]=useState("")
  const [openDate,setOpenDate]=useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions,setOpenOptions]=useState(false);
  const [options,setOptions]=useState({
    adults:1,
    children:0,
    room:1,
   } 
  )
  const navigate= useNavigate()

  const handleOption= (name,operation)=>{
    setOptions((prev) =>{
return{
  ...prev,
  [name]: operation === "increment" ? options[name] + 1 : options[name] - 1,
};
})
  };

  const handleSearch=()=>{
    navigate("/hotel",{state:{destination,date,options}}) ;
    
  }

    return (
 
 <div className="home"  >
  
   <div className="homeContainer" >
      <div className="homeList" >
      <div  className="homeIcons active" >  
        <FontAwesomeIcon icon={faBed}/>
        <span>Bed</span>
        </div>
        <div  className="homeIcons">
        <FontAwesomeIcon icon={faCoffee}/>
        <span>Coffee</span>
        </div>
        <div  className="homeIcons">
        <FontAwesomeIcon icon={faPlane}/>
        <span>Flights</span>
        </div>
        <div  className="homeIcons">
        <FontAwesomeIcon icon={faCar}/>
        <span>Car</span>
        </div>
        <div  className="homeIcons">
        <FontAwesomeIcon icon={faTaxi}/>
        <span>Airport Taxi</span>
        </div>
        </div>
        <h1 className="hedaderTitle"> A lifetime to discount  </h1>
        <div className="homeSearch">
        
      
        <div className="homeSearchItem">
        <FontAwesomeIcon icon={faBed} className="homeIcon"/>
        <input type="text" 
        placeholder="destination" 
        className="homeSeachInput"
        onChange={e=>setDestination(e.target.value)}
        />

        </div>

        <div className="homeSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} 
        className="homeIcon"/>
        <span onClick={()=>setOpenDate(!openDate)} 
        className="homeSeachText">{`${format(date[0].startDate,"MM/dd/yyyy")} To ${format(date[0].endDate,"MM/dd/yyyy" )}`} </span>
       {openDate && <DateRange 
        editableDateInputs={true}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false} 
        ranges={date} className="date"
        />}
        
        </div>

        <div className="homeSearchItem">
        <FontAwesomeIcon icon={faPerson} 
        className="homeIcon"/>
        <span onClick={()=>setOpenOptions(!openOptions)} className="homeSeachText">{`${options.adults} adult | ${options.children} children | ${options.room}room` }</span>
           {openOptions && 
        <div className="options">
            
        <div className="optionItem">
          <span className="optionText">Adult</span>
          <div className="optionCounter">
          <button disabled={options.adults<=1} className="optionCounterButton" onClick={()=>handleOption("adults","decrement")}>-</button>
          <span className="optionCounterNumber">{options.adults}</span>

           <button  className="optionCounterButton" onClick={()=>handleOption("adults","increment")}>+</button>
           </div>
           </div>
           <div className="optionItem">
          <span className="optionText">Children</span>
          <div className="optionCounter">
          <button disabled={options.children<=0}  className="optionCounterButton" onClick={()=>handleOption("children","decrement")}>-</button>
          <span className="optionCounterNumber">{options.children}</span>
          
           <button className="optionCounterButton" onClick={()=>handleOption("children","increment")}>+</button>
           </div> 
           </div> 

           <div className="optionItem">
          <span className="optionText">Room</span>
          <div className="optionCounter">
          <button disabled={options.room<=1}  
          className="optionCounterButton" onClick={()=>handleOption("room","decrement")}>-</button>
          <span className="optionCounterNumber">{options.room}</span>
          
           <button className="optionCounterButton" onClick={()=>handleOption("room","increment")}>+</button>
           </div> 
           </div>
           

        </div>}
        </div>
       
        <div className="homeSearchItem">
        <button   onClick ={handleSearch}  >< Link  className="homeBtn" to="/hotel">Search</Link></button>
   

        
        </div>
       
        </div>
        </div>
       
        </div>
       
        
               
    )
}


export default Home
