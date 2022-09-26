const express = require('express');
const app = express();
const port=5000;
const connectDB = require("./connectDB")
const cors = require("cors")
const hotel= require('./models/hotelSchema')

app.get('/api',(req,res)=>{
 hotel.find()
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
})
app.use(cors())
app.use(express.json())
app.use('/user',require("./routes/userRoutes"))
app.use('/posts',require("./routes/postRoutes"))
app.use('/admin',require("./routes/adminRoutes"))

connectDB();
app.listen(port,()=>console.log("running in port"+port));
