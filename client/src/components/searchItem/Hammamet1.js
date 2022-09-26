import "./hammamet1.css";
import Hotel from "../../pages/hotel/Hotel";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import img from "../../components/featured/img.jpg"



const Hammamet1 = () => {

  const navigate= useNavigate()

  const[hotelList,setHotelList]=useState()

  const handleAddHotel=(val)=>{
    setHotelList([...hotelList, val])
}

  const handleSearch=()=>{
    navigate("/hotel/hammamet") ;

  }
  return (
    <div className="searchItem">
      <img
        src={img}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Paradis Palace Hammamet </h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp"> Airport taxi</span>
        <span className="siSubtitle">
          Rooms with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation 24hours before check-in </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">TND 112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handleSearch} className="siCheckButton">See availability</button>
        </div>
      </div>
  
    </div>
  
  );
};

export default Hammamet1;