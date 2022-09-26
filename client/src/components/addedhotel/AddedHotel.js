import React, {useEffect,useState } from "react";
import axios from "axios";

import { formControlClasses } from "@mui/material";
import { Router } from "react-router-dom";


 
function AddedHotel(){

const [hotels, setHotels] = useState([
    {
      title: "",
      city:"",
      img: "",
      desc: "",
      
    },
  ]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // router.route('/api').post(function(req,res,next){
  //   res.send(req.body)
  //   formControlClasses.create(
  //    {"title": req.body.title,
  //    "city": req.body.city
  //   })
  //    .then(function(data){ 
  //    res.send(data);
  //    console.log(data);
  //   }).catch(function(err){console.log(err)});
  //  });

  // useEffect(() => {
  //   const fetchData = async () => {
     
      
  //       const res = await axios.get("http://localhost:5000/api");
  //       const jsonResult = res.json();
  //       setHotels(jsonResult)
 
      
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () =>{
    const result = await fetch("http://localhost:5000/api");
    
    const jsonResult = await result.json()

    setHotels(jsonResult)
     
    }
    fetchData()
  }, [])

return(

 <div>
        {hotels.map((hotel) =>
        <div key={hotel.id} >
          <h2>{hotel.title}</h2>
            <h3>{hotel.city}</h3>
          <img src={hotel.img}/>
          <h3>{hotel.desc}</h3>
        </div>)}
           
      </div>
     )
}
    
 export default AddedHotel