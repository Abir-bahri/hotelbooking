const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    
    title: {
        type: String, required: true,
      },
    city: {
        type: String, required: true,
      },
    img: {
        type: [String] ,
      },
    desc: {
        type: String,
        required: true,
      }

})
module.exports = mongoose.model("Hotel",hotelSchema);