const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/user');
const route = express.Router();

//this displays the user information
route.post('/', async(req,res)=>{
    const{firstName,lastName} = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})


module.exports = route;