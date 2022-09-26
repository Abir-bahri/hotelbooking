import "./hotel2.css";
import Home from "../../pages/Home";
import MailList from "../../components/Mail/MailList";
import Footer from "../../components/footer/Footer";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel2 = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://i.postimg.cc/nL6JdC2Z/paradispalacerecep2.jpg",
    },
    {
      src: "https://i.postimg.cc/BvjYwp7P/paradispalacepicine.jpg",
    },
    {
      src: "https://i.postimg.cc/NFHLF3tN/darroom.jpg",
    },
    {
      src: "https://i.postimg.cc/prsKvbpW/paradispalaceroom.jpg",
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
          <button className="bookNow" onClick={showBtn}>Reserve or Book Now!</button>
          {toggle? (
            <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
          ):null}

          <h1 className="hotelTitle"> Paradis Palace Hammamet</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Tunisia</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over TND 114 
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
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">

              Situé à une minute de la plage, l'hôtel Le Paradis Palace est un établissement
              quatre étoiles avec piscines et spa, idéal pour un séjour relaxant à Hammamet.
              L'hôtel propose des chambres simples, doubles, triples et quadruples, 
              ainsi que des appartements et des bungalows. Tous les logements sont climatisés
              et dotés d'un balcon ou d'une terrasse, ainsi que d'une télévision et 
              d'un mini-bar. L'établissement Le Paradis Palace dispose d'une piscine intérieure 
              chauffée, d'une piscine extérieure avec toboggan, d'un centre de remise en forme 
              avec spa, d'un parking privé gratuit et du Wi-Fi. L'hôtel dispose d'un bar-restaurant
              servant une cuisine internationale et locale, et il organise des barbecues sur la plage
              durant l'été. Idéalement situé à seulement une minute à pied de la plage, l'hôtel est à
              moins de 20 minutes en voiture du centre d'Hammamet et de sa Kasbah. 
              Un parcours de golf se situe à dix minutes en voiture, et l'aéroport international 
              de Tunis à moins d'une heure.
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

export default Hotel2;