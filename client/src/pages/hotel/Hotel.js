import "./hotel.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Home from "../../pages/Home";
import MailList from "../../components/Mail/MailList";
import Footer from "../../components/footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://i.postimg.cc/Hsyh2B3b/darrecep.jpg",
    },
    {
      src: "https://i.postimg.cc/XYkSK4kR/darreception.jpg",
    },
    {
      src: "https://i.postimg.cc/NFHLF3tN/darroom.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];


  
const [toggle,setToggle]= useState(false)

const showBtn=()=>{
  setToggle(!toggle)
}
    
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
   
      <Home type="list" />
    
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={showBtn}  >Reserve or Book Now!</button>
          {toggle? (
            <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
          ):null}
          
          <h1 className="hotelTitle">Dar Ismail Tabarka</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Tunisia</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 400m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over TND 11O 
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of the City</h1>
              <p className="hotelDesc">
              
              L'hôtel DAR ISMAIL ouvert en 2002, est considéré comme le joyau de 
              la région de Tabarka, offrant un cadre typiquement Tabarkois et conçu dans
               un style alliant l'Arabesque, l'Andalous et le moderne, l'hôtel s'étend sur
                une surface 5 hectares entourés de pinèdes parsemée de chênes-lièges 
                accueillant une belle piscine et une terrasse gazonnée bordée de palmiers 
                donnant directement sur une plage privée de sable fin sur 700 mètres.
                L'hôtel, dispose, d'un centre de remise en forme, d'une infrastructure 
                pour congrès et séminaires et idéal pour l'accueil des golfeurs et les 
                séjours en famille. Découvrez une destination pas comme les autres entre 
                mer et montagne et soyez nombreux à partager des moments uniques entre 
                plongée, du golf, ou ballades pédestres et équestre et sans oublier bien 
                évidement le seul et unique Festival de Jazz.
              </p>
            </div>
            
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;