import "./searchItem.css";
import Hotel from "../../pages/hotel/Hotel";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import img4 from "../../components/propertyList/img4.jpg"



const SearchItem = () => {

  const navigate= useNavigate()

  const[hotelList,setHotelList]=useState()

  const handleAddHotel=(val)=>{
    setHotelList([...hotelList, val])
}

  const handleSearch=()=>{
    navigate("/hotel/tabarka") ;

  }
  return (
    <div className="searchItem">
      <img
        src={img4}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Dar Ismail Tabarka</h1>
        <span className="siDistance">400m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 20m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">TND 110</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handleSearch} className="siCheckButton">See availability</button>
        </div>
      </div>
  
    </div>
  
  );
};

export default SearchItem;