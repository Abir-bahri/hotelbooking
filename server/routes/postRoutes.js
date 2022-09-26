const express = require('express');
const router = express.Router();

const {hotel}= require('../controllers/hotel')
const { authMiddleware } = require('../middlewares/authMiddlewares')
const upload = require('../middlewares/upload')

router.post("/addHotel",upload.array('img[]'),hotel)

router.get("/getHotels",(req,res)=>{
    hotel.find()
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
})

module.exports = router