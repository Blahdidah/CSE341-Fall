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

//this might be junk//
route.post('/newContact', async(req,res)=>{
    //create new entry
    const newContact = req.body;
    console.log(newContact);

    res.send('Contact has been added')
})

module.exports = route;