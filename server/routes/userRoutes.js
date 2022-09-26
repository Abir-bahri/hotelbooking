
const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const { register } = require("../controllers/register")
const { login }= require("../controllers/login")

router.post('/addUser',register);
router.post("/signin",login);


router.get("/getUsers",(req,res)=>{
    User.find()
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
})

router.get("/getUser/:id",(req,res)=>{
    User.findById({_id:req.params.id} )

    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
})

router.put("/updateUser/:id", (req, res) => {
    const userID = req.params.id;
    User.findByIdAndUpdate(userID, { ...req.body })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ msg: "User not found" });
        }
        res.send({ msg: "User updated", user });
      })
      .catch((err) => res.status(400).send({ msg: "ERROR UPDATING USER" }));
  });


router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data){
            res.status(404).json({msg:"ERROR ID not valid"})
        }else{
            res.status(200).json({msg:"user deleted"})
        }
    })
    .catch((err)=>{res.status(400).send(err)})

})
// export const updateUser = async (req,res,next)=>{
//     try {
//       const updatedUser = await User.findByIdAndUpdate(
//         req.params.id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedUser);
//     } catch (err) {
//       next(err);
//     }
//   }
//   export const deleteUser = async (req,res,next)=>{
//     try {
//       await User.findByIdAndDelete(req.params.id);
//       res.status(200).json("User has been deleted.");
//     } catch (err) {
//       next(err);
//     }
//   }
//   export const getUser = async (req,res,next)=>{
//     try {
//       const user = await User.findById(req.params.id);
//       res.status(200).json(user);
//     } catch (err) {
//       next(err);
//     }
//   }
//   export const getUsers = async (req,res,next)=>{
//     try {
//       const users = await User.find();
//       res.status(200).json(users);
//     } catch (err) {
//       next(err);
//     }
//   }
//   //UPDATE
// router.put("/updateUser/:id", verifyUser, updateUser);

// //DELETE
// router.delete("/delete/:id", verifyUser, deleteUser);

// //GET
// router.get("/getUser/:id", verifyUser, getUser);

// //GET ALL
// router.get("/getUsers", verifyAdmin, getUsers);


module.exports = router