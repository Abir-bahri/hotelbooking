const Hotel = require("../models/hotelSchema")
exports.hotel = async(req,res)=>{
    try{
        let {title,city,desc}=req.body
        let newhotel = new Hotel({title,city,desc})
        if (req.file) {
            newhotel.img = req.file.path
        }
        const hotel = await newhotel.save();
        res.status(200).json({hotel})
    }
    catch{
        res.status(500).json({msg:`something went wrong ${error}`})
    }
}