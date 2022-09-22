const express = require("express");
const User = require('../models/UserModel')
const router = express.Router();
const bcrypt = require("bcryptjs")

router.post('/register',async(req,res)=>{

    try{
        const userExists = await User.findOne({email:req.body.email})
        if(userExists){
            res.status(200).send({message:"User created",success:false});

        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
        const newUser = new User(req.body);

        await newUser.save();
        res.status(200).send({message:"User created"});

    }
    catch (error){
        res.status(500).send({message:"User created",success:false,error});

    }
})
router.post('/login',async(req,res)=>{

    try{

    }
    catch (e){

    }
})

module.exports = router;