const mongoose = require('mongoose')
// require('dotenv').config({path:'./.env'});
// MONGO_URL=process.env.MONGO_URL;
MONGO_URL= "mongodb+srv://authentification:ramziramzi@cluster0.ndasu.mongodb.net/ProjetRamzi?retryWrites=true&w=majority"
const connectDB=()=>{
    mongoose.connect(MONGO_URL,(err)=>{
        if (err) throw err;
        else 
        console.log('database is connected');
    })
}
module.exports = connectDB